import {
	Footer,
	MainNav,
	Providers,
	ScrollStatePageIndicator,
} from "@/components";
import { seoConfig } from "@/config/seo-site";
import { Locale, getDictionary, i18n } from "@/i18n";
import { getNormalizedLocale } from "@/utils/get-normalized-locale";
import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	return seoConfig[params.locale as Locale];
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
	const linksNavBar = mapperDictValuesFromKey(dictionary, "NavBarLinks").links;

	return (
		<html lang={getNormalizedLocale(params.locale)}>
			<body
				className={`${inter.className} bg-neutral-50 transition-colors dark:bg-neutral-900`}
			>
				<Providers>
					<header className="fixed top-0 z-10 h-[72px] w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
						<MainNav
							links={linksNavBar}
							mobileMenuDictionary={mapperDictValuesFromKey(
								dictionary,
								"MobileMenu"
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
