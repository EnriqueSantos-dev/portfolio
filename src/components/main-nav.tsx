import { LanguagePick } from "@/components/language-picker";
import { ToggleTheme } from "@/components/toggle-theme";
import Link from "next/link";
import { ActiveMobileMenuButton } from "./mobile-menu/active-menu-button";
import { SocialLinks } from "./social-links";

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

			<div className="flex items-center gap-3">
				<div className="hidden lg:flex lg:items-center lg:gap-2">
					<LanguagePick />
					<ToggleTheme />
				</div>
				<ActiveMobileMenuButton />
				<div className="hidden lg:block">
					<SocialLinks />
				</div>
			</div>
		</nav>
	);
}
