import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
// Import ReactQueryDevtools correctly for v5
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "../services/queryClient";

/**
 * React Query Provider component
 * Wraps the application with React Query's QueryClientProvider
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactElement} - React element
 */
function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* ReactQueryDevtools with correct props for v5 */}
      {process.env.NODE_ENV !== "production" && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  );
}

export default QueryProvider;
