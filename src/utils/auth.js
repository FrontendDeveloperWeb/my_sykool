/**
 * Authentication utilities for managing user session
 */
// No need to import Helper, we'll use window.helper

// Storage keys
const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  SESSION: 'session'
};

/**
 * Save user data to localStorage using window.helper.setStorageData
 * @param {Object} data - User data from login response
 */
export const saveUserData = (data) => {
  if (!data) return;

  // Save user data
  if (data.data) {
    window.helper.setStorageData(STORAGE_KEYS.USER, data.data);
    // Also set window.user for immediate access
    window.user = data.data;
  }

  // Save token
  if (data.token || data.access_token) {
    window.helper.setStorageData(STORAGE_KEYS.TOKEN, data.token || data.access_token);
  }

  // Save session
  if (data.session) {
    window.helper.setStorageData(STORAGE_KEYS.SESSION, data.session);
  }

  console.log('User data saved using window.helper.setStorageData');
};

/**
 * Get user data using window.helper.getStorageData
 * @returns {Object|null} User data or null if not found
 */
export const getUserData = () => {
  // First check if window.user is available
  if (window.user) {
    return window.user;
  }
  // Fall back to storage if window.user is not set
  return window.helper.getStorageData(STORAGE_KEYS.USER);
};

/**
 * Get auth token using window.helper.getStorageData
 * @returns {string|null} Auth token or null if not found
 */
export const getToken = () => {
  return window.helper.getStorageData(STORAGE_KEYS.TOKEN);
};

/**
 * Check if user is logged in
 * @returns {boolean} True if user is logged in
 */
export const isLoggedIn = () => {
  const userData = getUserData();
  return userData && Object.keys(userData).length > 0;
};

/**
 * Logout user by clearing storage data
 */
export const logout = () => {
  window.helper.removeStorageData();
  window.user = null;
};

export default {
  saveUserData,
  getUserData,
  getToken,
  isLoggedIn,
  logout
};
