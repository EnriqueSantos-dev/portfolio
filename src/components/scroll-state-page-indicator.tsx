"use client";

import { useMenu } from "@/contexts/menu";
import { cn } from "@/utils/cn";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollStatePageIndicator() {
	const { isMenuOpen } = useMenu();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<motion.div
			role="progressbar"
			aria-label="Page scroll progress indicator"
			className={cn(
				"fixed left-0 top-[72px] z-[5] h-1 w-full origin-left rounded-lg bg-gradient-to-r to-amber-500 from-red-500",
				{
					visible: !isMenuOpen,
					invisible: isMenuOpen,
				}
			)}
			style={{ scaleX }}
		/>
	);
}
