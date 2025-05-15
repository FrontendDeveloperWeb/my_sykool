import { QueryClient } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default query options
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      retry: 0, // Don't retry failed requests automatically
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      gcTime: 10 * 60 * 1000, // Cache data for 10 minutes (renamed from cacheTime in v5)
    },
    mutations: {
      // Default mutation options
      retry: 0, // Don't retry failed mutations automatically
      // Prevent mutations from being fired twice
      mutationKey: ['global-mutation-key'],
    },
  },
});

export default queryClient;
