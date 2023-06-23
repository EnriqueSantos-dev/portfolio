import { GetProjectsResponse } from "@/types";

export const LIMITE_PROJECTS = 10;

const query = `
  query ($locale: [Locale!]!, $skip: Int!) {
    projects(locales: $locale, skip: $skip, orderBy: relevance_ASC) {
      id
      name
      description
      deployLink
      backgroundCover {
        url
        width
        height
      }
      tags
      createdAt
      updatedAt
      relevance
      repositoryUrl
    }
    projectsConnection {
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
	skip: number = 0
): Promise<GetProjectsResponse> {
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_PERMANENT_AUTH_TOKEN}`,
	};

	const body = {
		query,
		variables: { locale: [locale], skip },
	};

	const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL as string, {
		method: "POST",
		headers,
		body: JSON.stringify(body),
		cache: "force-cache",
	});

	const data = await res.json();
	return data;
}
