"use client";

import { cn } from "@/utils/cn";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollStatePageIndicator() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<motion.div
			role="progressbar"
			aria-label="Page scroll progress indicator"
			className="progress-indicator fixed left-0 top-[72px] z-[5] h-1 w-full origin-left rounded-lg bg-gradient-to-r from-red-500 to-amber-500"
			style={{ scaleX }}
		/>
	);
}
