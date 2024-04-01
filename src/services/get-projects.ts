import { GetProjectsResponse } from "@/types";

export const LIMITE_PROJECTS = 6;

const query = `
  query getAllProjects ($locale: [Locale!]!, $skip: Int!, $first: Int!, $orderBy: ProjectOrderByInput!) {
    projectsConnection(locales: $locale, skip: $skip, first: $first, orderBy: $orderBy) {
			edges {
				node {
					id
					description
					name
					createdAt
					updatedAt
					deployLink
					tags
					repositoryUrl
					relevance
					backgroundCover {
						url
						width
						height
					}
				}  
			}
			pageInfo {
				pageSize
				hasNextPage
				hasPreviousPage
			}
		}
  }
`;

export async function getAllProjects(
	locale: string = "pt_BR",
	skip: number = 0,
	first: number = LIMITE_PROJECTS
): Promise<GetProjectsResponse> {
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
	};

	const body = {
		query,
		variables: { locale: [locale], skip, first, orderBy: "relevance_ASC" },
	};

	const res = await fetch(process.env.HYGRAPH_URL as string, {
		method: "POST",
		headers,
		body: JSON.stringify(body),
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data from API");
	}

	const data = await res.json();
	return data;
}
