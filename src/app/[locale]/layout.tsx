import {
	Footer,
	MainNav,
	Providers,
	ScrollStatePageIndicator,
} from "@/components";
import { MobileMenu } from "@/components/mobile-menu";
import { seoConfig } from "@/config/seo-site";
import { MenuProvider } from "@/contexts/menu";
import { Locale, getDictionary, i18n } from "@/i18n";
import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";
import { getNormalizedLocale } from "@/utils/get-normalized-locale";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	if (!i18n.locales.includes(params.locale as Locale)) {
		return {
			title: "404 - Page Not Found",
			description: "This page could not be found.",
		};
	}

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
				className={`${inter.className} bg-grid w-full bg-neutral-50 bg-cover bg-center transition-colors dark:bg-neutral-900`}
			>
				<Providers>
					<MenuProvider>
						<header className="fixed top-0 z-10 h-[72px] w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
							<MainNav links={linksNavBar} />
							<ScrollStatePageIndicator />
						</header>

						<MobileMenu
							links={linksNavBar}
							dictionary={mapperDictValuesFromKey(dictionary, "MobileMenu")}
						/>
					</MenuProvider>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
