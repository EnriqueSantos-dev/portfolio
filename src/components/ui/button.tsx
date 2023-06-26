import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva(
	"inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-80",
	{
		variants: {
			variant: {
				gradient:
					"bg-gradient-to-br from-red-500 to-amber-500 text-white ring-amber-500 hover:from-red-600 hover:to-amber-600 dark:ring-offset-neutral-900",
				neutral:
					"bg-neutral-950 text-neutral-100 ring-neutral-950 hover:bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:ring-neutral-100 dark:ring-offset-neutral-900 dark:hover:bg-neutral-100/90 [&:not(:focus-visible)]:shadow-[inset_0px_0px_0px_2px_rgb(40,40,40)] dark:[&:not(:focus-visible)]:shadow-[inset_0px_0px_0px_2px_rgb(220,220,220)]",
			},
			size: {
				lg: "h-12",
				md: "h-10",
			},
		},
		defaultVariants: {
			variant: "gradient",
			size: "md",
		},
	}
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, type, children, ...props }, ref) => (
		<button
			type={type ?? "button"}
			ref={ref}
			{...props}
			className={cn(buttonVariants({ variant, size }), className)}
		>
			{children}
		</button>
	)
);

Button.displayName = "Button";
