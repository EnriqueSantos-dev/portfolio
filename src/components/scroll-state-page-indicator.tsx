"use client";

import { useScroll, motion, useSpring } from "framer-motion";
import React from "react";

export function ScrollStatePageIndicator() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<motion.div
			role="progressbar"
			className="fixed left-0 top-[72px] z-[5px] h-1 w-full origin-left rounded-full bg-hightLightGradient"
			style={{ scaleX }}
		/>
	);
}
