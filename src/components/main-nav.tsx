import { LanguagePick } from "@/components/language-picker";
import { MobileMenu } from "@/components/mobile-menu";
import { ToggleTheme } from "@/components/toggle-theme";
import { socialLinks } from "@/constants/social";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export type MainNavProps = {
	links: Record<"link", string>[];
};

export function MainNav({ links }: MainNavProps) {
	return (
		<nav className="container flex h-[inherit] items-center justify-between py-2 text-neutral-900 dark:text-white">
			<Link
				href="/"
				className="gradient-highlight text-xl font-bold decoration-red-500 transition-all hover:underline focus-visible:underline focus-visible:outline-none"
			>
				EnriqueSantos.dev
			</Link>

			<ul className="hidden h-10 items-center justify-center space-x-2 rounded-full border border-neutral-200 bg-transparent px-4 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/50 lg:flex">
				{links.map((item) => (
					<li
						key={item.link}
						className="group relative h-[inherit] flex-1 px-2"
					>
						<Link
							href={`#${item.link}`}
							className="relative inline-flex h-[inherit] origin-center items-center justify-center capitalize  after:absolute after:bottom-px after:left-0 after:h-0.5 after:w-0 after:scale-0 after:rounded-full after:bg-black after:bg-gradient-to-r after:from-red-500 after:to-amber-500 after:transition-transform hover:after:w-full hover:after:scale-100 focus-visible:outline-none focus-visible:after:w-full focus-visible:after:scale-100 group-hover:text-neutral-900/80 dark:group-hover:text-white/80"
						>
							{item.link}
						</Link>
					</li>
				))}
			</ul>

			<div className="flex items-center space-x-3">
				<LanguagePick />
				<ToggleTheme />
				<MobileMenu />

				<Link
					href={socialLinks.github}
					target="_blank"
					className="hidden h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-900 lg:inline-flex"
				>
					<BsGithub size={20} fill="currentColor" />
				</Link>

				<Link
					href={socialLinks.linkedin}
					target="_blank"
					className="hidden h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800  dark:focus-visible:ring-offset-neutral-900 lg:inline-flex"
				>
					<BsLinkedin size={18} fill="currentColor" />
				</Link>
			</div>
		</nav>
	);
}
