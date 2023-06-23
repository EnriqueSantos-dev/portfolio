import "server-only";
import type { Locale } from "./config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	"pt-br": () =>
		import("./dictionaries/pt-br.json").then((module) => module.default),
	"en-us": () =>
		import("./dictionaries/en-us.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
