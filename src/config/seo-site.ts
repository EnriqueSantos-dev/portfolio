import { Metadata } from "next";

import { Locale } from "@/i18n";

import { socialLinks } from "@/constants/social";
import { getNormalizedLocale } from "@/utils/get-normalized-locale";

const siteUrl = "https://enriquesantos-dev.vercel.app";

const generateSiteTitleAndDesc = (locale: Locale) => {
	return locale === "pt-br"
		? {
				title: "Enrique Santos | Portfólio",
				description: "Portfólio de Enrique Santos, desenvolvedor web fullstack",
		  }
		: {
				title: "Enrique Santos | Portfolio",
				description: "Enrique Santos portfolio, fullstack web developer",
		  };
};

const generateImagesData = (locale: Locale) => {
	return {
		url: "assets/og.png",
		alt:
			locale === "pt-br"
				? "Portfólio de Enrique Santos"
				: "Enrique Santos portfolio",
	};
};

const generateCommonMetadata = (locale: Locale): Metadata => {
	return {
		metadataBase: new URL("https://enriquesantos-dev.vercel.app"),
		alternates: {
			canonical: "/",
			languages: {
				"pt-BR": "/pt-br",
				"en-US": "/en-us",
			},
		},
		twitter: {
			card: "summary_large_image",
			creatorId: "@Enrique_S_D_O",
			site: "@Enrique_S_D_O",
			images: generateImagesData(locale),
			...generateSiteTitleAndDesc(locale),
		},
		openGraph: {
			type: "website",
			...generateSiteTitleAndDesc(locale),
			siteName: generateSiteTitleAndDesc(locale).title,
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
