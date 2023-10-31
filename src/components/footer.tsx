import { Copyright } from "lucide-react";

import { SocialLinks } from "./social-links";

export function Footer() {
	return (
		<footer className="relative h-[72px] w-full border-t border-neutral-200 bg-neutral-50 py-2 dark:border-neutral-800 dark:bg-neutral-950">
			<div className="container flex h-full items-center justify-between text-xs text-neutral-500 dark:text-neutral-500 lg:text-sm/3">
				<p className="inline-flex items-center gap-1">
					Copyright <Copyright size={16} /> 2023 Enrique Santos
				</p>
				<SocialLinks />
			</div>
		</footer>
	);
}
