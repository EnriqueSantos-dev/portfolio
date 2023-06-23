import { cn } from "@/utils/cn";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<input
			type="text"
			ref={ref}
			{...props}
			className={cn(
				"h-12 rounded-md bg-neutral-100 dark:bg-neutral-950 focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 text-sm dark:placeholder-neutral-400 transition-colors px-4 py-2 w-full dark:[&:not(:focus-visible)]:shadow-[inset_0px_0px_0px_2px_rgb(28,28,28)] shadow-[inset_0px_0px_0px_2px_rgb(212,212,212)] dark:shadow-none",
				className
			)}
		/>
	)
);

Input.displayName = "Input";
