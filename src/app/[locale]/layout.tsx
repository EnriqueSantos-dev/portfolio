import {
	Footer,
	MainNav,
	Providers,
	ScrollStatePageIndicator,
} from "@/components";
import { socialLinks } from "@/constants/nav-bar";
import { Locale, getDictionary, i18n } from "@/i18n";
import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export function generateMetadata(): Metadata {
	return {
		title: "Enrique Santos | Portfólio",
		description: "Portfólio de Enrique Santos",
		authors: {
			name: "Enrique Santos",
			url: socialLinks.github,
		},
		category: "website",
		robots: "index, follow",
		keywords:
			"Web, NextJS, React, TailwindCss, Server-Components, Radix-ui, Frame-Motion, Typescript, Javascript, CSS, HTML, Frontend, Backend, Fullstack, Developer, Software, Engineer, Portfolio",
	};
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	const dictionary = await getDictionary(params.locale as Locale);

	return (
		<html lang={params.locale}>
			<body
				className={`${inter.className} bg-grid w-full bg-neutral-50 bg-cover bg-center dark:bg-neutral-900`}
			>
				<Providers>
					<header className="fixed top-0 z-10 h-[72px] w-full border-b border-neutral-200 bg-neutral-100/40 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/40">
						<MainNav
							links={mapperDictValuesFromKey(dictionary, "NavBarLinks").links}
						/>
						<ScrollStatePageIndicator />
					</header>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
