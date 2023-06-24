export function getNormalizedLocale(locale: string): string {
	const splittedLocale = locale.split("-");
	return `${splittedLocale[0]}-${splittedLocale[1].toUpperCase()}`;
}
