"use client";

import { THEME_KEY } from "@/constants/local-storage-keys";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";

const client = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<QueryClientProvider client={client}>
				<ThemeProvider
					attribute="class"
					enableSystem={false}
					storageKey={THEME_KEY}
					defaultTheme="light"
				>
					{children}
					<ReactQueryDevtools />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
