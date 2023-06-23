import { socialLinks } from "@/constants/nav-bar";
import { Copyright } from "lucide-react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Footer() {
	return (
		<footer className="relative h-[72px] w-full border-t border-neutral-300 bg-neutral-100 py-2 dark:border-neutral-800 dark:bg-neutral-950">
			<div className="container flex h-full items-center justify-between text-xs text-neutral-600 dark:text-neutral-600 lg:text-sm/3">
				<p className="inline-flex items-center gap-1">
					Copyright <Copyright size={16} /> 2023 Enrique Santos
				</p>

				<div className="flex items-center gap-2">
					<Link
						href={socialLinks.github}
						target="_blank"
						className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-900"
					>
						<BsGithub size={20} fill="currentColor" />
					</Link>

					<Link
						href={socialLinks.linkedin}
						target="_blank"
						className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-900"
					>
						<BsLinkedin size={18} fill="currentColor" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
