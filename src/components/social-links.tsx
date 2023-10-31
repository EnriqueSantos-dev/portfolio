import Link from "next/link";

import { Github, Linkedin } from "lucide-react";

import { socialLinks } from "@/constants/social";

export function SocialLinks() {
	return (
		<div className="flex items-center gap-2">
			<Link
				href={socialLinks.github}
				target="_blank"
				aria-label="Navigate to github profile"
				className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-900"
			>
				<Github size={18} />
			</Link>

			<Link
				href={socialLinks.linkedin}
				target="_blank"
				aria-label="Navigate to linkedin profile"
				className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-neutral-200 p-2 font-medium text-neutral-900 ring-amber-500 ring-offset-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-900"
			>
				<Linkedin size={18} />
			</Link>
		</div>
	);
}
