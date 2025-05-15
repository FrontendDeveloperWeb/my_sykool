import { useState } from 'react';
import { useQuery as useReactQuery } from '@tanstack/react-query';
import apiClient from '../../services/apiClient';
import api from '../../services/api';

/**
 * Simple hook for data fetching with React Query
 *
 * @param {string} endpoint - API endpoint key from api.js
 * @param {Object} options - Query options
 * @returns {Object} - Query result object
 */
export function useQuery(endpoint, options = {}) {
  // Extract options with defaults
  const { params, slug, ...queryOptions } = options;

  // Get API endpoint details
  const apiEndpoint = api[endpoint];
  if (!apiEndpoint) {
    throw new Error(`API endpoint "${endpoint}" not found`);
  }

  // Create a query key that includes the slug if provided
  const queryKey = [
    endpoint,
    slug ? slug : '',
    params ? JSON.stringify(params) : ''
  ].filter(Boolean);



  // Use React Query directly
  return useReactQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response = await apiClient.request(endpoint, { params, slug });
        return response;
      } catch (error) {
        console.error(`Query error for ${endpoint}${slug ? `/${slug}` : ''}:`, error);
        throw error;
      }
    },
    // Make sure all options are properly passed through
    ...queryOptions
  });
}

/**
 * Hook for paginated queries
 *
 * @param {string} endpoint - API endpoint key from api.js
 * @param {Object} options - Query options
 * @returns {Object} - Query result object with pagination helpers
 */
export function usePaginatedQuery(endpoint, options = {}) {
  const [page, setPage] = useState(options.initialPage || 1);
  const [pageSize, setPageSize] = useState(options.initialPageSize || 10);

  // Add pagination params
  const params = {
    ...(options.params || {}),
    page,
    limit: pageSize,
  };

  // Use the base query hook with pagination params
  const query = useQuery(endpoint, {
    ...options,
    params
  });

  // Add pagination helpers
  return {
    ...query,
    page,
    pageSize,
    setPage,
    setPageSize,
    nextPage: () => setPage(p => p + 1),
    prevPage: () => setPage(p => Math.max(1, p - 1)),
    goToPage: (newPage) => setPage(newPage)
  };
}

export default useQuery;
