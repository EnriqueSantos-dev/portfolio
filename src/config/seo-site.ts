import { socialLinks } from "@/constants/social";
import { Locale } from "@/i18n";
import { getNormalizedLocale } from "@/utils/get-normalized-locale";
import { Metadata } from "next";

const siteUrl = "https://enriquesantos-dev.vercel.app";

const generateImagesData = (locale: Locale) => {
	return {
		url: `${siteUrl}/assets/og.png`,
		alt:
			locale === "pt-br"
				? "Portfólio de Enrique Santos"
				: "Enrique Santos portfolio",
	};
};

const generateCommonMetadata = (locale: Locale): Metadata => {
	return {
		twitter: {
			card: "summary_large_image",
			creatorId: "@Enrique_S_D_O",
			site: siteUrl,
			images: generateImagesData(locale),
		},
		openGraph: {
			type: "website",
			siteName:
				locale === "pt-br"
					? "Portfólio de Enrique Santos"
					: "Enrique Santos portfolio",
			locale: getNormalizedLocale(locale),
			url: siteUrl,
			images: [{ ...generateImagesData(locale), width: 1200, height: 630 }],
		},
		authors: [
			{
				name: "Enrique Santos",
				url: socialLinks.github,
			},
		],
	};
};

export const seoConfig: Record<Locale, Metadata> = {
	"pt-br": {
		title: "Enrique Santos | Portfólio",
		description: "Portfólio de Enrique Santos, desenvolvedor web fullstack",
		keywords:
			"website, portfólio, desenvolvedor, web, fullstack, reactjs, nextjs, tailwindcss",
		...generateCommonMetadata("pt-br"),
	},
	"en-us": {
		title: "Enrique Santos | Portfolio",
		description: "Enrique Santos portfolio, fullstack web developer",
		keywords:
			"website, portfolio, developer, web, fullstack, reactjs, nextjs, tailwindcss",
		...generateCommonMetadata("en-us"),
	},
};
