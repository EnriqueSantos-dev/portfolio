"use client";

import { ToggleTheme } from "@/components";
import { useMenu } from "@/contexts/menu";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type MobileMenuProps = {
	links: Record<"link", string>[];
};

export function MobileMenu({ links }: MobileMenuProps) {
	const { isMenuOpen, toggleMenu } = useMenu();
	const handleClickInLink = () => toggleMenu();

	return (
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
										onClick={handleClickInLink}
									>
										{link}
									</Link>
								</li>
							))}
						</ul>

						<div className="space-y-4">
							<div className="flex flex-col gap-3 rounded-md border border-neutral-300 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-950">
								<span className="border-b pb-1 font-medium dark:border-neutral-900 dark:text-neutral-300">
									Translations
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
									Appearance
								</span>

								<ToggleTheme />
							</div>
						</div>
					</motion.nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
