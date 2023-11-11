"use client";

import { useRef } from "react";

import Image from "next/image";

import { AnimatePresence, motion, useInView } from "framer-motion";

import { Dictionary } from "@/utils/mappers-i18n";

import LampImg from "@/assets/lamp-3d.png";

import { AboutCard } from "./about-card-animated";

type AboutProps = {
	sectionId: string;
	dictionary: Dictionary["About"];
};

export function About({ dictionary, sectionId }: AboutProps) {
	const divRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(divRef, { once: true });

	return (
		<section id={sectionId} ref={divRef} className="space-y-12">
			<h2 className="gradient-highlight block text-center text-3xl font-bold md:text-4xl/10">
				{dictionary.heading}
			</h2>

			<AnimatePresence>
				{inView && (
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.3, delay: 0.3 }}
						className="grid grid-cols-1 place-items-center gap-y-16 lg:grid-cols-2 lg:gap-y-0"
					>
						<div className="flex flex-col gap-6 lg:gap-4">
							<p className="text-justify text-lg/7 dark:text-neutral-100 md:text-lg/9">
								{dictionary.paragraph}
							</p>

							<div className="mt-2 grid auto-cols-[minmax(150px,180px)] grid-flow-col place-content-center gap-x-4 lg:place-content-start">
								<AboutCard>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="shrink-0"
									>
										<rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
										<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
									</svg>
									<p className="inline-flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100">
										{dictionary.cards.freelancer.label}
									</p>
									<span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 ">
										{dictionary.cards.freelancer.experience}
									</span>
								</AboutCard>

								<AboutCard>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
										<path d="M6 12v5c3 3 9 3 12 0v-5" />
									</svg>
									<p className="inline-flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100">
										{dictionary.cards.student.label}
									</p>
								</AboutCard>
							</div>
						</div>

						<motion.div
							initial={{ x: 100, scale: 0.8, opacity: 0 }}
							animate={{ x: 0, scale: 1, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.3 }}
							exit={{ x: 100, scale: 0.8, opacity: 0 }}
							className="relative"
						>
							<Image
								src={LampImg}
								alt="lamp 3d model"
								width={400}
								height={400}
								className="rounded-xl drop-shadow-gradientShadow"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
