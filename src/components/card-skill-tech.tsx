"use client";

import { cn } from "@/utils/cn";
import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui";

type CardSkillTechProps = {
	tooltip: string;
	iconUrl: string;
	isInvertInDark?: boolean;
	motionConfig?: AnimationProps;
};

export default function CardSkillTech({
	tooltip,
	iconUrl,
	isInvertInDark = false,
	motionConfig,
}: CardSkillTechProps) {
	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<motion.button
						{...motionConfig}
						aria-label={`tech card for ${tooltip}`}
						className="flex h-28 w-28 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 ring-amber-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 dark:border-neutral-800 dark:bg-neutral-950/60 dark:shadow-[inset_0_0_0_3px_rgb(20,20,20)] dark:focus-visible:ring-offset-neutral-900"
					>
						<Image
							src={iconUrl}
							alt="tech icon"
							width={50}
							height={50}
							className={cn({
								"dark:invert": isInvertInDark,
							})}
						/>
					</motion.button>
				</TooltipTrigger>

				<TooltipContent>
					<p>{tooltip}</p>
					<TooltipArrow />
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
