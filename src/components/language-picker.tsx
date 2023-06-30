"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "./navigation-menu";

export function LanguagePick() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						aria-label="open navigation menu languages"
						className="flex items-center gap-x-1 rounded-md p-1 text-neutral-900 dark:text-neutral-100"
					>
						<Languages size="20" />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="flex h-auto w-max flex-col items-center justify-start gap-2 px-4 py-2">
							<li className="w-full">
								<NavigationMenuLink asChild>
									<Link
										href="/pt-br"
										locale="pt-br"
										className="dark:focus-visible:gradient-highlight dark:hover:gradient-highlight inline-block space-x-2 p-1 text-xs font-medium text-neutral-900 transition-all hover:underline focus-visible:text-neutral-950 focus-visible:underline focus-visible:decoration-amber-500 focus-visible:outline-none dark:text-neutral-300"
									>
										Português Brasil
									</Link>
								</NavigationMenuLink>
							</li>

							<li className="w-full">
								<NavigationMenuLink asChild>
									<Link
										href="/en-us"
										locale="en-us"
										className="dark:focus-visible:gradient-highlight dark:hover:gradient-highlight inline-block space-x-2 p-1 text-xs font-medium text-neutral-900 transition-all hover:underline focus-visible:text-neutral-950 focus-visible:underline focus-visible:decoration-amber-500 focus-visible:outline-none dark:text-neutral-300"
									>
										English US
									</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
