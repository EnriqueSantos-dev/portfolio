"use client";

import { useMenu } from "@/contexts/menu";
import { AlignRight, X } from "lucide-react";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui";

export function ActiveMobileMenuButton() {
	const { isMenuOpen, toggleMenu } = useMenu();

	return (
		<TooltipProvider>
			<Tooltip delayDuration={300}>
				<TooltipTrigger
					className="cursor-pointer text-neutral-900 dark:text-neutral-100 lg:hidden"
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
	);
}
