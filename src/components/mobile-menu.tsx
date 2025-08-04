"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Link from "next/link";

import { AlignRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { ToggleTheme } from "@/components";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui";

import { cn } from "@/utils/cn";
import { Dictionary } from "@/utils/mappers-i18n";

type MobileMenuProps = {
	links: Record<"link", string>[];
	dictionary: Dictionary["MobileMenu"];
};

export function MobileMenu({ links, dictionary }: MobileMenuProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		const addOverflowHiddenInWindow = () => {
			const html = document.documentElement;
			if (isMenuOpen) {
				html.classList.add("overflow-hidden");
				html.setAttribute("data-menu-open", "true");
			} else {
				html.classList?.remove("overflow-hidden");
				html.setAttribute("data-menu-open", "false");
			}
		};

		addOverflowHiddenInWindow();

		const onResize = () => {
			if (window.matchMedia("(min-width: 1024px)").matches && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [isMenuOpen]);

	if (!isMounted) return null;

	return (
		<>
			<TooltipProvider>
				<Tooltip delayDuration={300}>
					<TooltipTrigger
						aria-label="Toggle menu"
						className="z-20 cursor-pointer text-neutral-900 dark:text-neutral-100 lg:hidden"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <AlignRight />}
					</TooltipTrigger>

					<TooltipContent>
						<p>Toggle menu</p>
						<TooltipArrow />
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			{createPortal(
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delayChildren: 0.5 }}
							exit={{ opacity: 0, y: -50 }}
							className={cn(
								"w-full overflow-y-auto fixed z-[8] inset-0 top-[72px] bg-neutral-50 px-4 py-6 dark:bg-neutral-900 transition-colors lg:hidden"
							)}
						>
							<motion.nav
								initial={{ visibility: "hidden" }}
								animate={{ visibility: "visible" }}
								transition={{ duration: 0.3 }}
								className="mx-auto flex h-full max-w-xs flex-col justify-between gap-4 md:max-w-sm"
							>
								<ul className="flex flex-col gap-4 py-6 text-neutral-900 dark:text-neutral-100">
									{links.map(({ link }) => (
										<li key={link} className="">
											<Link
												href={`#${link}`}
												className="block w-full border-b border-neutral-300 py-2 font-medium capitalize transition-colors hover:text-amber-500 focus-visible:text-amber-500 focus-visible:outline-none dark:border-neutral-800"
												onClick={toggleMenu}
											>
												{link}
											</Link>
										</li>
									))}
								</ul>

								<div className="space-y-4">
									<div className="flex flex-col gap-3 rounded-md border border-neutral-300 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-950">
										<span className="border-b pb-1 font-medium dark:border-neutral-900 dark:text-neutral-300">
											{dictionary.languageSelector}
										</span>

										<ul className="space-y-4 text-sm text-neutral-900 dark:text-neutral-100">
											<li className="flex items-center justify-between">
												<Link
													href="/pt-br"
													className="font-medium hover:text-amber-500 hover:underline focus-visible:underline focus-visible:outline-none dark:text-neutral-300 dark:hover:text-amber-500"
												>
													Português Brasil
												</Link>
												<span className="text-base">🇧🇷</span>
											</li>

											<li className="flex items-center justify-between ">
												<Link
													href="/en-us"
													className="font-medium hover:text-amber-500 hover:underline focus-visible:underline focus-visible:outline-none dark:text-neutral-300 dark:hover:text-amber-500"
												>
													English US
												</Link>
												<span className="text-base">🇺🇸</span>
											</li>
										</ul>
									</div>

									<div className="flex items-center justify-between rounded-md border border-neutral-300 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-950">
										<span className="text-sm font-medium text-neutral-900 dark:text-neutral-300">
											{dictionary.themeSelector}
										</span>

										<ToggleTheme />
									</div>
								</div>
							</motion.nav>
						</motion.div>
					)}
				</AnimatePresence>,
				document.getElementById("portal") as HTMLElement
			)}
		</>
	);
}
