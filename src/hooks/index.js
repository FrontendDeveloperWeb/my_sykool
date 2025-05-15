import { useCallback } from "react";
import { useQuery, usePaginatedQuery, useMutation } from './reactQuery';

/**
 * Legacy hook for making API requests
 * This is kept for backward compatibility
 * It's recommended to use the React Query hooks directly for new code
 */
export function useFetch(
  header,
  type = "mount",
  slug = "",
  dependencies = [],
  enablePagination = false
) {
  // For backward compatibility, we'll use the React Query hooks internally
  // but expose the same API as the original useFetch hook

  // Use the appropriate React Query hook based on pagination
  const queryHook = enablePagination ? usePaginatedQuery : useQuery;

  // Convert dependencies to a format React Query can use
  const queryDependencies = dependencies.filter(dep => dep !== undefined && dep !== null);

  // Use React Query hook with the same parameters
  const query = queryHook(header, {
    slug,
    enabled: type === "mount",
    dependencies: queryDependencies,
    initialPage: 1,
    initialPageSize: 10,
  });

  // Create a mutation for the postData function
  const mutation = useMutation(header, {
    // Invalidate the current query when mutation succeeds
    invalidateQueries: [[header, slug, ...queryDependencies]],
  });

  // Create a fetchApi function that matches the original API
  const fetchApi = useCallback(
    async (_, page = 1, pageSize = 10) => {
      if (enablePagination) {
        // For paginated queries, update the page and pageSize
        query.setPage(page);
        query.setPageSize(pageSize);
      } else {
        // For non-paginated queries, refetch
        await query.refetch();
      }
    },
    [enablePagination, query]
  );

  // Create a postData function that matches the original API
  const postData = useCallback(
    async (payload, callback) => {
      try {
        const result = await mutation.mutateAsync(payload);
        if (callback) {
          callback(result);
        }
        return result;
      } catch (error) {
        // Error handling is done by the mutation hook
        return null;
      }
    },
    [mutation]
  );

  // Return an object that matches the original API
  return {
    loading: query.isLoading || query.isFetching || mutation.isPending,
    data: query.data?.data,
    postData,
    fetchApi,
    setPage: enablePagination ? query.setPage : undefined,
    setPageSize: enablePagination ? query.setPageSize : undefined,
    pagination: query.pagination || {},
    // Additional properties from React Query
    error: query.error || mutation.error,
    isError: query.isError || mutation.isError,
    isSuccess: query.isSuccess,
    refetch: query.refetch,
    invalidate: query.invalidate,
  };
}
