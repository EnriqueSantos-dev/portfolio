import { About, Contact, Hero, Projects, Skills } from "@/components";

import { getAllProjects } from "@/services/get-projects";

import { getDictionary, Locale } from "@/i18n";

import { mapperDictValuesFromKey } from "@/utils/mappers-i18n";

const getFormattedLocaleForHyGraph = (locale: string) => {
	const [localeId, localeCountry] = locale.split("-");
	return `${localeId}_${localeCountry.toUpperCase()}`;
};

const getProjects = async () => {
	// no throw error in server side rendering if getAllProjects fails to fetch data from API endpoint (it will return undefined)
	return await getAllProjects()
		.then((projects) => projects)
		.catch(() => undefined);
};

export default async function Home({ params }: { params: { locale: string } }) {
	const locale = getFormattedLocaleForHyGraph(params.locale);
	const [projects, dictionary] = await Promise.all([
		getProjects(),
		getDictionary(params.locale as Locale),
	]);
	const linksNavBar = mapperDictValuesFromKey(dictionary, "NavBarLinks").links;

	return (
		<main className="dark:text-white">
			<div className="container relative pt-[72px] ">
				<Hero dictionary={mapperDictValuesFromKey(dictionary, "HeroDetails")} />
				<About
					dictionary={mapperDictValuesFromKey(dictionary, "About")}
					sectionId={linksNavBar[0].link}
				/>
				<Skills
					sectionId={linksNavBar[1].link}
					dictionary={mapperDictValuesFromKey(dictionary, "Skills")}
				/>
				<Projects
					projects={projects}
					currentLocale={locale}
					sectionId={linksNavBar[2].link}
					dictionary={mapperDictValuesFromKey(dictionary, "Projects")}
				/>
				<Contact
					sectionId={linksNavBar[3].link}
					dictionary={mapperDictValuesFromKey(dictionary, "Contact")}
				/>
			</div>
		</main>
	);
}
