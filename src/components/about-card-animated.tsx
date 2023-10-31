"use client";

import React, { ReactNode } from "react";

import useGetBoundingClient from "@/hooks/useGetBoundingClient";

export function AboutCard({ children }: { children: ReactNode }) {
	const cardRef = React.useRef<HTMLDivElement>(null);
	const { x, y } = useGetBoundingClient(cardRef);
	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;

	return (
		<div
			ref={cardRef}
			style={style}
			className="bg-neutra-950 group relative flex-1 transition-all before:absolute before:-inset-px before:-z-10 before:h-[calc(100%+3px)] before:w-[calc(100%+3px)] before:rounded-lg before:bg-radialGradient hover:scale-105"
		>
			<div className="flex h-full w-[inherit] flex-col items-center gap-2 rounded-lg border-2 border-neutral-200 bg-neutral-100 p-4 shadow-[inset_0_0_0_2px_rgb(212,212,212)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[inset_0_0_0_2px_rgb(20,20,20)]">
				{children}
			</div>
		</div>
	);
}
