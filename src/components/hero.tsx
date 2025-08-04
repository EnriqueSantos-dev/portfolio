"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion, useInView } from "motion/react";

import { buttonVariants } from "@/components/ui/button";

import { socialLinks } from "@/constants/social";

import { Dictionary } from "@/utils/mappers-i18n";

type HeroProps = {
	dictionary: Dictionary["HeroDetails"];
};

export function Hero({ dictionary }: HeroProps) {
	const divRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(divRef, { once: true });

	return (
		<div
			id="hero"
			ref={divRef}
			className="relative grid h-mainHeight w-full grid-cols-1 place-content-center gap-y-12 lg:grid-cols-2 lg:gap-y-0"
		>
			<AnimatePresence>
				{inView && (
					<>
						<motion.section
							key="hero"
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="flex w-full flex-col md:h-full"
						>
							<h1 className="text-center text-2xl/8 font-bold text-neutral-900 dark:text-neutral-100 md:text-3xl/10 lg:text-start">
								{dictionary.heading.hello} <br />
								{dictionary.heading.myNameIs}
								<br />
								<span className="gradient-highlight underline decoration-red-500 decoration-wavy underline-offset-4">
									{dictionary.heading.iAm}
								</span>
							</h1>

							<p className="my-4 w-full text-center text-sm font-medium text-neutral-600 dark:text-neutral-100/50 md:text-base lg:text-start xl:max-w-[90%]">
								{dictionary.paragraph}
							</p>

							<div className="mt-2 grid grid-cols-2 place-content-center items-center gap-x-4 lg:place-content-start xl:max-w-[90%]">
								<a
									href="/enrique-santos-de-oliveira-curriculum.pdf"
									download="enrique-santos-de-oliveira-curriculum"
									className={buttonVariants({
										variant: "neutral",
										size: "lg",
										className: "text-xs uppercase",
									})}
								>
									{dictionary.buttons.downloadCV}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mb-0.5"
									>
										<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
										<polyline points="14 2 14 8 20 8" />
										<line x1="16" x2="8" y1="13" y2="13" />
										<line x1="16" x2="8" y1="17" y2="17" />
										<line x1="10" x2="8" y1="9" y2="9" />
									</svg>
								</a>

								<Link
									href={`#${dictionary.buttons.contactMeHref}`}
									className={buttonVariants({
										variant: "gradient",
										size: "lg",
										className: "text-xs uppercase",
									})}
								>
									{dictionary.buttons.contactMe}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="mb-0.5"
									>
										<circle cx="12" cy="8" r="5" />
										<path d="M20 21a8 8 0 1 0-16 0" />
									</svg>
								</Link>
							</div>
						</motion.section>

						<motion.section
							key="hero-2"
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="flex h-full w-full justify-center"
						>
							<div className="relative h-80 w-80 border-spacing-6 animate-morph overflow-hidden ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-neutral-900">
								<Image
									src={`${socialLinks.github}.png`}
									alt="avatar"
									fill
									priority
									quality={100}
								/>
							</div>
						</motion.section>

						<motion.svg
							key="hero-3"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							width="956"
							height="663"
							viewBox="0 0 956 663"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-1/2 top-1/2 -z-10 max-w-full -translate-x-1/2 -translate-y-1/2 lg:max-w-4xl"
						>
							<path
								d="M807.515 2.03375H880.74M807.515 2.03375V75.2485M807.515 2.03375H734.289M880.74 2.03375V75.2485M880.74 2.03375H953.966V75.2485M807.515 75.2485H880.74M807.515 75.2485V148.463M807.515 75.2485H734.289M734.289 2.03375H661.064M734.289 2.03375V75.2485M880.74 75.2485H953.966M880.74 75.2485V148.463M953.966 75.2485V148.463M880.74 148.463H807.515M880.74 148.463V221.678M880.74 148.463H953.966M807.515 148.463V221.678M807.515 148.463H734.289M734.289 75.2485H661.064M734.289 75.2485V148.463M953.966 148.463V221.678M880.74 221.678H807.515M880.74 221.678V294.893M880.74 221.678H953.966M807.515 221.678V294.893M807.515 221.678H734.289M734.289 148.463H661.064M734.289 148.463V221.678M880.74 294.893H807.515M880.74 294.893V368.107M880.74 294.893H953.966M953.966 221.678V294.893M807.515 294.893V368.107M807.515 294.893H734.289M734.289 221.678H661.064M734.289 221.678V294.893M880.74 368.107H807.515M880.74 368.107V441.322M880.74 368.107H953.966M953.966 294.893V368.107M807.515 368.107V441.322M807.515 368.107H734.289M734.289 294.893H661.064M734.289 294.893V368.107M880.74 441.322H807.515M880.74 441.322V514.537M880.74 441.322H953.966M953.966 368.107V441.322M807.515 441.322V514.537M807.515 441.322H734.289M734.289 368.107H661.064M734.289 368.107V441.322M880.74 514.537H807.515M880.74 514.537V587.752M880.74 514.537H953.966M953.966 441.322V514.537M807.515 514.537V587.752M807.515 514.537H734.289M734.289 441.322H661.064M734.289 441.322V514.537M880.74 587.752H807.515M880.74 587.752V660.966M880.74 587.752H953.966M953.966 514.537V587.752M807.515 587.752V660.966M807.515 587.752H734.289M734.289 514.537H661.064M734.289 514.537V587.752M880.74 660.966H807.515M880.74 660.966H953.966V587.752M807.515 660.966H734.289M734.289 587.752H661.064M734.289 587.752V660.966M734.289 660.966H661.064M75.2596 2.03375H2.03406V75.2485M75.2596 2.03375V75.2485M75.2596 2.03375H148.485M2.03406 75.2485H75.2596M2.03406 75.2485V148.463M75.2596 75.2485H148.485M75.2596 75.2485V148.463M148.485 2.03375V75.2485M148.485 2.03375H221.711M148.485 75.2485H221.711M148.485 75.2485V148.463M75.2596 148.463H2.03406M75.2596 148.463V221.678M75.2596 148.463H148.485M2.03406 148.463V221.678M221.711 2.03375V75.2485M221.711 2.03375H294.936M221.711 75.2485H294.936M221.711 75.2485V148.463M148.485 148.463V221.678M148.485 148.463H221.711M294.936 2.03375V75.2485M294.936 2.03375H368.162M294.936 75.2485H368.162M294.936 75.2485V148.463M221.711 148.463V221.678M221.711 148.463H294.936M368.162 2.03375V75.2485M368.162 2.03375H441.387M368.162 75.2485H441.387M368.162 75.2485V148.463M294.936 148.463V221.678M294.936 148.463H368.162M441.387 2.03375V75.2485M441.387 2.03375H514.613M441.387 75.2485H514.613M441.387 75.2485V148.463M368.162 148.463V221.678M368.162 148.463H441.387M514.613 2.03375V75.2485M514.613 2.03375H587.838M514.613 75.2485H587.838M514.613 75.2485V148.463M441.387 148.463V221.678M441.387 148.463H514.613M587.838 2.03375V75.2485M587.838 2.03375H661.064M587.838 75.2485H661.064M587.838 75.2485V148.463M514.613 148.463V221.678M514.613 148.463H587.838M661.064 2.03375V75.2485M661.064 75.2485V148.463M587.838 148.463V221.678M587.838 148.463H661.064M661.064 148.463V221.678M75.2596 221.678H2.03406M75.2596 221.678V294.893M75.2596 221.678H148.485M2.03406 221.678V294.893M75.2596 294.893H2.03406M75.2596 294.893V368.107M75.2596 294.893H148.485M148.485 221.678V294.893M148.485 221.678H221.711M2.03406 294.893V368.107M75.2596 368.107H2.03406M75.2596 368.107V441.322M75.2596 368.107H148.485M148.485 294.893V368.107M148.485 294.893H221.711M2.03406 368.107V441.322M75.2596 441.322H2.03406M75.2596 441.322V514.537M75.2596 441.322H148.485M148.485 368.107V441.322M148.485 368.107H221.711M2.03406 441.322V514.537M75.2596 514.537H2.03406M75.2596 514.537V587.752M75.2596 514.537H148.485M148.485 441.322V514.537M148.485 441.322H221.711M2.03406 514.537V587.752M75.2596 587.752H2.03406M75.2596 587.752V660.966M75.2596 587.752H148.485M148.485 514.537V587.752M148.485 514.537H221.711M2.03406 587.752V660.966H75.2596M75.2596 660.966H148.485M148.485 587.752V660.966M148.485 587.752H221.711M148.485 660.966H221.711M221.711 221.678V294.893M221.711 221.678H294.936M221.711 294.893V368.107M221.711 294.893H294.936M221.711 368.107V441.322M221.711 368.107H294.936M221.711 441.322V514.537M221.711 441.322H294.936M221.711 514.537V587.752M221.711 514.537H294.936M221.711 587.752V660.966M221.711 587.752H294.936M221.711 660.966H294.936M294.936 221.678V294.893M294.936 221.678H368.162M294.936 294.893V368.107M294.936 294.893H368.162M294.936 368.107V441.322M294.936 368.107H368.162M294.936 441.322V514.537M294.936 441.322H368.162M294.936 514.537V587.752M294.936 514.537H368.162M294.936 587.752V660.966M294.936 587.752H368.162M294.936 660.966H368.162M368.162 221.678V294.893M368.162 221.678H441.387M368.162 294.893V368.107M368.162 294.893H441.387M368.162 368.107V441.322M368.162 368.107H441.387M368.162 441.322V514.537M368.162 441.322H441.387M368.162 514.537V587.752M368.162 514.537H441.387M368.162 587.752V660.966M368.162 587.752H441.387M368.162 660.966H441.387M441.387 221.678V294.893M441.387 221.678H514.613M441.387 294.893V368.107M441.387 294.893H514.613M441.387 368.107V441.322M441.387 368.107H514.613M441.387 441.322V514.537M441.387 441.322H514.613M441.387 514.537V587.752M441.387 514.537H514.613M441.387 587.752V660.966M441.387 587.752H514.613M441.387 660.966H514.613M514.613 221.678V294.893M514.613 221.678H587.838M514.613 294.893V368.107M514.613 294.893H587.838M514.613 368.107V441.322M514.613 368.107H587.838M514.613 441.322V514.537M514.613 441.322H587.838M514.613 514.537V587.752M514.613 514.537H587.838M514.613 587.752V660.966M514.613 587.752H587.838M514.613 660.966H587.838M587.838 221.678V294.893M587.838 221.678H661.064M587.838 294.893V368.107M587.838 294.893H661.064M587.838 368.107V441.322M587.838 368.107H661.064M587.838 441.322V514.537M587.838 441.322H661.064M587.838 514.537V587.752M587.838 514.537H661.064M587.838 587.752V660.966M587.838 587.752H661.064M587.838 660.966H661.064M661.064 221.678V294.893M661.064 294.893V368.107M661.064 368.107V441.322M661.064 441.322V514.537M661.064 514.537V587.752M661.064 587.752V660.966"
								stroke="url(#gradient_svg)"
								strokeOpacity="0.4"
							/>
							<defs>
								<radialGradient
									id="gradient_svg"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(478 331.5) rotate(90) scale(329.466 475.966)"
								>
									<stop stopOpacity="0.5" />
									<stop offset="1" stopOpacity="0" />
								</radialGradient>
							</defs>
						</motion.svg>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
