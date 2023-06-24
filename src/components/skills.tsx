"use client";

import { skills } from "@/constants/skills-array";
import { AnimatePresence, inView, useInView } from "framer-motion";
import { useRef } from "react";
import CardSkillTech from "./card-skill-tech";

type SkillsProps = {
	sectionId: string;
	dictionary: {
		heading: string;
		subheading: string;
	};
};

export function Skills({ dictionary, sectionId }: SkillsProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef);

	return (
		<section id={sectionId} className="flex flex-col space-y-16">
			<div className="text-center">
				<h2 className="gradient-highlight mb-2 block text-3xl font-bold md:text-4xl/10">
					{dictionary.heading}
				</h2>

				<p className="mx-auto text-neutral-600 dark:text-neutral-300 lg:w-2/4">
					{dictionary.subheading}
				</p>
			</div>

			<div
				className="mx-auto mt-10 flex flex-wrap items-center justify-around gap-4 lg:justify-center xl:max-w-[80%]"
				ref={containerRef}
			>
				{skills.map((skill, i) => (
					<AnimatePresence key={skill.name}>
						{isInView && (
							<CardSkillTech
								key={skill.name}
								iconUrl={skill.icon}
								tooltip={skill.name}
								isInvertInDark={!!skill.isInvertInDark}
								motionConfig={{
									initial: { opacity: 0, scale: 0 },
									animate: { opacity: 1, scale: 1 },
									exit: { opacity: 0, scale: 0 },
									transition: { duration: 0.2, delay: i * 0.1 },
								}}
							/>
						)}
					</AnimatePresence>
				))}
			</div>
		</section>
	);
}
