import { useMutation as useReactMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../services/apiClient';
import api from '../../services/api';

/**
 * Simple hook for data mutations with React Query
 *
 * Usage patterns:
 *
 * CREATE (POST):
 * - mutate(payload) - Sends payload in the request body
 *
 * UPDATE (PUT):
 * - mutate({ slug: 'uid', data: { ...payload, _method: 'PUT' } })
 * - The UID is in the URL, and the payload includes _method: 'PUT'
 *
 * DELETE:
 * - mutate({ slug: 'uid' })
 * - The UID is in the URL, and no payload is needed
 *
 * @param {string} endpoint - API endpoint key from api.js
 * @param {Object} options - Mutation options
 * @returns {Object} - Mutation result object
 */
export function useMutation(endpoint, options = {}) {
  const {
    useFormData,
    showSuccessNotification = false,
    invalidateQueries = [],
    method, // Allow overriding the method
     onSuccess: userOnSuccess,
    ...mutationOptions
  } = options;
  // Get query client for cache invalidation
  const queryClient = useQueryClient();

  // Get API endpoint details
  const apiEndpoint = api[endpoint];
  if (!apiEndpoint) {
    throw new Error(`API endpoint "${endpoint}" not found`);
  }

  // Allow overriding the method from the options
  const requestMethod = method || apiEndpoint.method;

  // Use React Query's useMutation hook
  return useReactMutation({
    // Simple mutation function
    mutationFn: async (payload) => {
      // Handle both simple data objects and objects with data and slug properties
      const { data, slug } = payload && typeof payload === 'object' && 'data' in payload
        ? payload
        : { data: payload, slug: undefined };

      // For DELETE requests, don't include data in the request
      const isDeleteRequest = requestMethod === 'DELETE';

      // Create a custom request with the specified method
      const response = await apiClient.request(endpoint, {
        // Only include data if it's not a DELETE request or if data is explicitly provided
        ...((!isDeleteRequest) && { data }),
        slug,
        useFormData: !isDeleteRequest && useFormData,
        showSuccessNotification,
        method: requestMethod // Use the overridden method
      });
      return response;
    },

    onSuccess: (data, variables, context) => {
      // Handle query invalidation
      handleQueryInvalidation(invalidateQueries, queryClient, { data, variables });

      if (userOnSuccess) {
        userOnSuccess(data, variables, context);
      }
    },


    // Pass through other options
    ...mutationOptions
  });
}
function handleQueryInvalidation(invalidateQueries, queryClient, { data, variables }) {
  if (!invalidateQueries) return;

  try {
    let queriesToInvalidate = [];

    // Handle function that returns query keys
    if (typeof invalidateQueries === 'function') {
      queriesToInvalidate = invalidateQueries({ data, variables });
    } 
    // Handle array of query keys
    else if (Array.isArray(invalidateQueries)) {
      queriesToInvalidate = invalidateQueries;
    }

    // Process all queries to invalidate
    if (queriesToInvalidate.length > 0) {
      queriesToInvalidate.forEach(queryKey => {
        if (queryKey) {
          queryClient.invalidateQueries({
            queryKey: Array.isArray(queryKey) ? queryKey : [queryKey]
          });
        }
      });
    }
  } catch (error) {
    console.error('Error during query invalidation:', error);
  }
}
export default useMutation;
