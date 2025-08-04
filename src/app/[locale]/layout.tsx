import "../globals.css";

import { ReactNode } from "react";

import { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import {
	Footer,
	MainNav,
	Providers,
	ScrollStatePageIndicator,
} from "@/components";

import { getDictionary, i18n, Locale } from "@/i18n";

import { getNormalizedLocale } from "@/utils/get-normalized-locale";
import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";

import { seoConfig } from "@/config/seo-site";

export async function generateMetadata(props: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	return seoConfig[params.locale as Locale];
}

export async function generateStaticParams() {
	return await new Promise((resolve) =>
		resolve(i18n.locales.map((locale) => ({ locale }))),
	);
}

export default async function RootLayout(props: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const params = await props.params;

	const { children } = props;

	const dictionary = await getDictionary(params.locale as Locale);
	const linksNavBar = mapperDictValuesFromKey(dictionary, "NavBarLinks").links;

	return (
		<html lang={getNormalizedLocale(params.locale)}>
			<body
				className={`${GeistSans.className} bg-neutral-50 transition-colors dark:bg-neutral-900`}
			>
				<Providers>
					<header className="fixed top-0 z-10 h-[72px] w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
						<MainNav
							links={linksNavBar}
							mobileMenuDictionary={mapperDictValuesFromKey(
								dictionary,
								"MobileMenu",
							)}
						/>
						<ScrollStatePageIndicator />
					</header>
					{children}
					<Footer />
				</Providers>
				<Analytics mode="production" />
				<div id="portal" />
			</body>
		</html>
	);
}
