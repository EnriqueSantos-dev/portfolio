"use client";

import useTheme from "@/hooks/useTheme";
import { cn } from "@/utils/cn";
import * as Switch from "@radix-ui/react-switch";
import {
	TooltipArrow,
	TooltipContent,
	Tooltip as TooltipPrimitive,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function ToggleTheme() {
	const [theme, toggleTheme] = useTheme();
	const isDark = theme === "dark";

	return (
		<TooltipProvider>
			<TooltipPrimitive>
				<TooltipTrigger asChild>
					<Switch.Root
						aria-label="Switch between dark and light mode"
						className={cn(
							"bg-purple relative flex h-6 w-12 overflow-hidden items-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white  dark:focus-visible:ring-offset-zinc-900 dark:border-zinc-800 border dark:hover:bg-zinc-800 dark:hover:border-zinc-700 hover:bg-neutral-100 transition-colors dark:bg-neutral-950/50 dark:backdrop-blur-md rounded-full"
						)}
						onCheckedChange={toggleTheme}
					>
						<Switch.Thumb
							asChild
							className={cn(
								"transition-transform flex h-4/5 p-px w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 ml-[3px] shadow-sm to-amber-500 absolute top-1/2 -translate-y-1/2 text-white",
								{
									"translate-x-full": isDark,
								}
							)}
						>
							{!isDark ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="12" r="4" />
									<path d="M12 2v2" />
									<path d="M12 20v2" />
									<path d="m4.93 4.93 1.41 1.41" />
									<path d="m17.66 17.66 1.41 1.41" />
									<path d="M2 12h2" />
									<path d="M20 12h2" />
									<path d="m6.34 17.66-1.41 1.41" />
									<path d="m19.07 4.93-1.41 1.41" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
								</svg>
							)}
						</Switch.Thumb>
					</Switch.Root>
				</TooltipTrigger>

				<TooltipContent>
					<p>Toggle theme</p>

					<TooltipArrow />
				</TooltipContent>
			</TooltipPrimitive>
		</TooltipProvider>
	);
}