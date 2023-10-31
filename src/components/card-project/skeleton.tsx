import React from "react";

import { cn } from "@/utils/cn";

export default function CardProjectSkeleton() {
	const animatePulseStyle =
		"animate-pulse rounded-lg dark:bg-neutral-800 bg-neutral-200";

	return (
		<div className="relative overflow-hidden rounded-lg bg-neutral-100/60 ring-1 ring-neutral-300/80 ring-offset-[3px] ring-offset-neutral-200 backdrop-blur-lg dark:bg-neutral-900/80 dark:ring-neutral-600 dark:ring-offset-neutral-800">
			<div
				className={`relative aspect-video rounded-t-lg ${animatePulseStyle}`}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="" alt="" />
			</div>
			<div className="grid grid-flow-row gap-y-4 p-4">
				<div className="grid grid-cols-[1fr,auto] items-center border-b border-neutral-200 py-1 dark:border-neutral-800">
					<span className={`inline h-6 w-2/4 ${animatePulseStyle}`} />
				</div>
				<div className="flex flex-col gap-1">
					<span className={`block h-3 ${animatePulseStyle}`} />
					<span className={`block h-3 ${animatePulseStyle}`} />
					<span className={`block h-3 ${animatePulseStyle}`} />
				</div>
				<div className="">
					<span className={`block h-3 w-32 ${animatePulseStyle}`} />
					<div className="mt-2 flex w-full flex-wrap gap-2">
						{Array.from({ length: 4 }).map((_, index) => (
							<span
								key={index}
								className={cn(
									"inline-block h-6 w-20 px-4 py-2",
									animatePulseStyle
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
