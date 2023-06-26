import { About, Contact, Hero, Projects, Skills } from "@/components";
import { Locale, getDictionary } from "@/i18n";
import { getAllProjects } from "@/services/get-projects";
import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";

function getFormattedLocaleForHyGraph(locale: string) {
	const [localeId, localeCountry] = locale.split("-");

	return `${localeId}_${localeCountry.toUpperCase()}`;
}

async function getProjects(locale: string) {
	// no throw error in server side rendering if getAllProjects fails to fetch data from API endpoint (it will return undefined)
	return await getAllProjects()
		.then((projects) => projects)
		.catch(() => undefined);
}

export default async function Home({ params }: { params: { locale: string } }) {
	const locale = getFormattedLocaleForHyGraph(params.locale);
	const [projects, dictionary] = await Promise.all([
		getProjects(locale),
		getDictionary(params.locale as Locale),
	]);

	return (
		<main className="dark:text-white">
			<div className="container relative pt-[72px] ">
				<Hero dictionary={mapperDictValuesFromKey(dictionary, "HeroDetails")} />
				<About
					dictionary={mapperDictValuesFromKey(dictionary, "About")}
					sectionId={
						mapperDictValuesFromKey(dictionary, "NavBarLinks").links[0].link
					}
				/>
				<Skills
					sectionId={
						mapperDictValuesFromKey(dictionary, "NavBarLinks").links[1].link
					}
					dictionary={mapperDictValuesFromKey(dictionary, "Skills")}
				/>
				<Projects
					projects={projects}
					currentLocale={locale}
					sectionId={
						mapperDictValuesFromKey(dictionary, "NavBarLinks").links[2].link
					}
					dictionary={mapperDictValuesFromKey(dictionary, "Projects")}
				/>
				<Contact
					sectionId={
						mapperDictValuesFromKey(dictionary, "NavBarLinks").links[3].link
					}
					dictionary={mapperDictValuesFromKey(dictionary, "Contact")}
				/>
			</div>
		</main>
	);
}
