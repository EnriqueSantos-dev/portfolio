export const i18n = {
	defaultLocale: "pt-br",
	locales: ["pt-br", "en-us"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
