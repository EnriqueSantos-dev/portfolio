"use client";

import { ThemeProvider } from "next-themes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { THEME_KEY } from "@/constants/local-storage-keys";

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
					<Toaster
						position="top-right"
						toastOptions={{
							className:
								"dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-100 text-neutral-900",
						}}
					/>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
