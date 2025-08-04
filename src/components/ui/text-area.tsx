import React from "react";

import { cn } from "@/utils/cn";

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ className, ...props }, ref) => (
		<textarea
			ref={ref}
			{...props}
			className={cn(
				"rounded-md resize-none bg-neutral-100 dark:bg-neutral-950 focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 text-sm dark:placeholder-neutral-300 transition-colors px-4 py-2 w-full h-20 dark:[&:not(:focus-visible)]:shadow-[inset_0px_0px_0px_2px_rgb(28,28,28)] shadow-[inset_0px_0px_0px_2px_rgb(212,212,212)] dark:shadow-none",
				className,
			)}
		/>
	),
);

TextArea.displayName = "Input";
