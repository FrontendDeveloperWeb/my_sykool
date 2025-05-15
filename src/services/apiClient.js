import api from './api';
import { notification } from 'antd';
// No need to import Helper, we'll use window.helper

/**
 * Simple fetch client for API requests
 */
const apiClient = {
  /**
   * Create a fetch request with common headers and options
   * @param {string} url - API URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Fetch promise
   */
  async fetchApi(url, options = {}) {
   
    const { data, useFormData = false, ...fetchOptions } = options;
    // Set up headers
    const headers = new Headers();
    headers.append('Accept', 'application/json');

    // Don't set Content-Type for FormData
    if (!useFormData && options.method !== 'GET') {
      headers.append('Content-Type', 'application/json');
    }

    // Add auth token if available

    // If no session but window.user exists, try to get token from there
    if (window.user) {
      headers.append('Authorization', `Bearer ${window.user.api_token}`);
    }

    // Prepare request options
    const requestOptions = {
      ...fetchOptions,
      headers,
      credentials: 'include'
    };

    // Add body for non-GET and non-DELETE requests
    if (data && options.method !== 'GET' && options.method !== 'DELETE') {
      if (useFormData) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        requestOptions.body = formData;
      } else {
        requestOptions.body = JSON.stringify(data);
      }
    }

    // Log request in development
    if (process.env.NODE_ENV !== 'production') {
      
    }

    return fetch(url, requestOptions);
  },

  /**
   * Handle API response
   * @param {Response} response - Fetch response
   * @param {boolean} showSuccessNotification - Whether to show success notifications
   * @returns {Promise} - Parsed response data
   */
  async handleResponse(response, showSuccessNotification = false) {
    const data = await response.json();

    if (response.ok) {
      if (showSuccessNotification && data.message) {
        notification.success({
          message: 'Success',
          description: data.message,
          duration: 4
        });
      }
      return data;
    }

    // Always handle errors with notifications
    if (response.status === 401) {
      notification.error({
        message: 'Session Expired',
        description: 'Please log in again',
        duration: 4
      });
      // Redirect to login
      // window.location.href = '/';
    } else if (response.status == 422 && data.errors) {
      // Validation errors from Laravel/standard format
      Object.entries(data.errors).forEach(([field, message]) => {
        notification.error({
          message: 'Validation Error',
          description: `${field}: ${Array.isArray(message) ? message[0] : message}`,
          duration: 4
        });
      });
    } else if (data.data) {
      // Handle errors inside data.data structure
      if (typeof data.data === 'object' && !Array.isArray(data.data)) {
        // Handle object with multiple key-value pairs
        Object.entries(data.data).forEach(([field, message]) => {
          // Handle different types of message values
          if (typeof message === 'string') {
            notification.error({
              message: `Validation Errorr`,
              description: message,
              duration: 4
            });
          } else if (Array.isArray(message)) {
            // If message is an array, show the first item
            notification.error({
              message: `Error: ${field}`,
              description: message[0],
              duration: 4
            });
          } else if (typeof message === 'object') {
            // If message is an object, stringify it
            notification.error({
              message: `Error: ${field}`,
              description: JSON.stringify(message),
              duration: 4
            });
          }
        });
      } else if (typeof data.data === 'string') {
        // Handle simple string error in data.data
        notification.error({
          message: 'Error',
          description: data.data,
          duration: 4
        });
      }
    } else {
      notification.error({
        message: 'Error',
        description: data.message || 'Something went wrong',
        duration: 4
      });
    }

    throw { status: response.status, ...data };
  },

  /**
   * Get the full URL for an API endpoint
   * @param {string} endpoint - API endpoint key
   * @param {Object} params - URL parameters
   * @param {string} slug - Optional URL slug
   * @returns {string} - Full URL
   */
  getUrl(endpoint, params = {}, slug = '') {
    if (!api[endpoint]) {
      throw new Error(`API endpoint "${endpoint}" not found`);
    }

    const { url } = api[endpoint];
    const baseUrl = window.constants?.api_base_url || '';

    // Build the URL with the slug if provided
    let fullUrl = `${baseUrl}${url}`;

    // Append the slug to the URL if provided
    if (slug) {
      fullUrl = `${fullUrl}/${slug}`;
    }

    // Add query params
    if (params && Object.keys(params).length > 0) {
      const queryString = new URLSearchParams(params).toString();
      fullUrl += fullUrl.includes('?') ? `&${queryString}` : `?${queryString}`;
    }

    return fullUrl;
  },

  /**
   * Make a request to the API
   * @param {string} endpoint - API endpoint key
   * @param {Object} options - Request options
   * @returns {Promise} - Promise that resolves to the API response
   */
  async request(endpoint, options = {}) {
    if (!api[endpoint]) {
      throw new Error(`API endpoint "${endpoint}" not found`);
    }

    const {
      params,
      slug,
      method: customMethod, // Allow overriding the method
      showSuccessNotification = false,
      ...fetchOptions
    } = options;

    // Use the custom method if provided, otherwise use the endpoint's method
    const method = customMethod || api[endpoint].method;

    try {
      const url = this.getUrl(endpoint, params, slug);
      const response = await this.fetchApi(url, { method, ...fetchOptions });
      return this.handleResponse(response, showSuccessNotification);
    } catch (error) {

      // Check if it's a structured error from our API
      if (error.data) {
        // If error contains data.data with multiple key-value pairs
        if (error.data.data && typeof error.data.data === 'object') {
          Object.entries(error.data.data).forEach(([field, message]) => {
            notification.error({
              message: `Error: ${field}`,
              description: Array.isArray(message) ? message[0] : message,
              duration: 4
            });
          });
        }
        // Error is already handled in handleResponse
        throw error;
      }

      // Show network errors
      notification.error({
        message: 'Network Error',
        description: error.message || 'Failed to connect to the server',
        duration: 4
      });

      throw error;
    }
  }
}

export default apiClient;
