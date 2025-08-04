"use client";

import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useGetProjects } from "@/hooks/useGetProjects";

import { LIMITE_PROJECTS } from "@/services/get-projects";

import { Dictionary } from "@/utils/mappers-i18n";

import { GetProjectsResponse } from "@/types";

import { CardProject } from "./card-project/card";
import CardProjectSkeleton from "./card-project/skeleton";
import { Button } from "./ui";

type ProjectsProps = {
	sectionId: string;
	dictionary: Dictionary["Projects"];
	projects?: GetProjectsResponse;
	currentLocale: string;
};

export function Projects({
	sectionId,
	dictionary,
	projects,
	currentLocale,
}: ProjectsProps) {
	const queryClient = useQueryClient();
	const [paginationInfo, setPaginationInfo] = useState({
		skip: 0,
		first: LIMITE_PROJECTS,
	});

	const query = useGetProjects({
		initialData: projects,
		skip: paginationInfo.skip,
		first: paginationInfo.first,
		locale: currentLocale,
	});

	const hasNextPage =
		!query?.data?.data.projectsConnection?.pageInfo.hasNextPage;
	const hasPrevPage =
		!query?.data?.data.projectsConnection?.pageInfo.hasPreviousPage;

	const handleNextPage = () => {
		setPaginationInfo((prev) => ({
			first: prev.first * 2,
			skip: prev.skip + prev.first,
		}));
	};

	const handlePrevPage = () => {
		setPaginationInfo((prev) => ({
			first: prev.first > LIMITE_PROJECTS ? prev.first / 2 : LIMITE_PROJECTS,
			skip: prev.skip > LIMITE_PROJECTS ? prev.skip - prev.first : 0,
		}));
	};

	useEffect(() => {
		queryClient.invalidateQueries({
			queryKey: ["projects", paginationInfo.skip, paginationInfo.first],
		});
	}, [paginationInfo, queryClient]);

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
				{(query.isFetching || query.isLoading) &&
					Array.from({ length: LIMITE_PROJECTS }).map((_, index) => (
						<CardProjectSkeleton key={index} />
					))}

				{!query.isFetching &&
					query.data &&
					query.data.data.projectsConnection.edges.map(({ node }) => (
						<CardProject
							key={node.id}
							{...node}
							dictionary={{
								button: dictionary.card.button,
								techs: dictionary.card.techs,
							}}
						/>
					))}
			</div>

			<div className="flex justify-center gap-3">
				<Button
					variant="neutral"
					className="w-24"
					disabled={!!hasPrevPage}
					onClick={handlePrevPage}
				>
					{dictionary.pagination.previous}
				</Button>
				<Button
					variant="neutral"
					onClick={handleNextPage}
					className="w-24"
					disabled={hasNextPage}
				>
					{dictionary.pagination.next}
				</Button>
			</div>
		</section>
	);
}
