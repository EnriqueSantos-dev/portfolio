"use client";

import { GetProjectsResponse } from "@/types";
import { CardProject } from "./card-project/card";
import { Button } from "./ui";
import { useGetProjects } from "@/hooks/useGetProjects";
import { useState } from "react";
import { LIMITE_PROJECTS } from "@/services/get-projects";

type DictionaryProjects = {
	heading: string;
	subheading: string;
	card: {
		button: string;
	};
};

type ProjectsProps = {
	sectionId: string;
	dictionary: DictionaryProjects;
	projects: GetProjectsResponse;
};

export function Projects({ sectionId, dictionary, projects }: ProjectsProps) {
	const [skip, setSkip] = useState(LIMITE_PROJECTS);
	const query = useGetProjects({ initialData: projects, skip });

	const hasNextPage = query?.data?.projectsConnection?.pageInfo.hasNextPage;
	const hasPrevPage = query?.data?.projectsConnection?.pageInfo.hasPreviousPage;

	const handleNextPage = () => {
		setSkip((prev) => prev + LIMITE_PROJECTS);
	};

	return (
		<section id={sectionId} className="space-y-16">
			<div className="text-center">
				<h2 className="gradient-highlight mb-2 block text-3xl font-bold md:text-4xl/10">
					{dictionary.heading}
				</h2>

				<p className="mx-auto text-neutral-600 dark:text-neutral-300 lg:w-2/4">
					{dictionary.subheading}
				</p>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(350px,400px))] place-content-center gap-5 drop-shadow-projectShadowLight dark:drop-shadow-projectShadowDark">
				{projects?.data?.projects?.map((project) => (
					<CardProject
						key={project.id}
						{...project}
						dictionary={{
							button: dictionary.card.button,
						}}
					/>
				))}
			</div>

			<div className="mx-auto grid w-52 grid-cols-2 justify-end gap-3">
				{hasPrevPage && <Button variant="neutral">Prev</Button>}
				{hasNextPage && (
					<Button variant="neutral" onClick={handleNextPage}>
						Next
					</Button>
				)}
			</div>
		</section>
	);
}
