'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface QueryClientProviderProps {
	children: React.ReactNode;
}

export function QueryClientWrapper({ children }: QueryClientProviderProps) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
