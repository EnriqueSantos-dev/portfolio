export type GetProjectsResponse = {
	data: {
		projectsConnection: {
			edges: {
				node: Project;
			}[];
			pageInfo: PaginationInfosGetProjects;
		};
	};
};

export type Project = {
	id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	description: string;
	tags: string[];
	backgroundCover: {
		url: string;
		width: number;
		height: number;
	};
	deployLink: string;
	repositoryUrl: string;
	relevance: "high" | "medium" | "small";
};

export type PaginationInfosGetProjects = {
	pageSize: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};
