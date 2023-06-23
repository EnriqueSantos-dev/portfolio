import React from "react";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function MobileMenu() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="cursor-pointer lg:hidden">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
							stroke="url(#paint0_linear_16_2)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11 3V21"
							stroke="url(#paint1_linear_16_2)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18 15L15 12L18 9"
							stroke="url(#paint2_linear_16_2)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_16_2"
								x1="2"
								y1="12"
								x2="21.5"
								y2="12"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#EF4343" />
								<stop offset="1" stopColor="#F59E0B" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_16_2"
								x1="2"
								y1="12"
								x2="21.5"
								y2="12"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#EF4343" />
								<stop offset="1" stopColor="#F59E0B" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_16_2"
								x1="14"
								y1="12"
								x2="18.5"
								y2="12"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#EF4343" />
								<stop offset="1" stopColor="#F59E0B" />
							</linearGradient>
						</defs>
					</svg>
				</TooltipTrigger>

				<TooltipContent>
					<p>Toggle menu</p>
					<TooltipArrow />
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
