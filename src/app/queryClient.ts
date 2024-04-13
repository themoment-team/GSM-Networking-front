import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const invalidateQueries = (query: string[]) => {
  queryClient.invalidateQueries({ queryKey: query });
};

export default queryClient;
