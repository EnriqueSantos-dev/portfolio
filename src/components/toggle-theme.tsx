"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import * as Switch from "@radix-ui/react-switch";

import {
	Tooltip as TooltipPrimitive,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/utils/cn";

export function ToggleTheme() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<TooltipProvider delayDuration={300}>
			<TooltipPrimitive>
				<TooltipTrigger asChild>
					<Switch.Root
						aria-label="Switch between dark and light mode"
						className={cn(
							"group bg-purple relative flex h-6 w-12 overflow-hidden items-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 dark:border-zinc-800 border dark:hover:bg-zinc-800 dark:hover:border-zinc-700 hover:bg-neutral-100 transition-colors dark:bg-neutral-950/50 dark:backdrop-blur-md rounded-full"
						)}
						onCheckedChange={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					>
						<Switch.Thumb
							asChild
							className={cn(
								"transition-[transform,background] duration-300 flex h-4/5 p-[2px] w-5 items-center justify-center rounded-full ml-[3px] absolute top-1/2 -translate-y-1/2",
								{
									"translate-x-full text-neutral-100 bg-neutral-700 group-hover:bg-neutral-950":
										isDark,
									"text-neutral-900 bg-neutral-200": !isDark,
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
									strokeWidth="2"
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
