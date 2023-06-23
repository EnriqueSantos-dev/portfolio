"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<QueryClientProvider client={client}>
				{children}
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}
