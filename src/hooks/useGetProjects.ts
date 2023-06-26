"use client";

import { GetProjectsResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useGetProjects({
	locale = "pt_BR",
	skip = 0,
	initialData,
	first = 6,
}: {
	locale?: string;
	skip?: number;
	first?: number;
	initialData?: GetProjectsResponse;
}) {
	return useQuery({
		queryKey: ["projects", skip, first] as const,
		queryFn: async () => {
			const res = await fetch(
				`/api/projects?locale=${locale}&skip=${skip}&first=${first}`
			);
			const data = await res.json();
			return data as GetProjectsResponse;
		},
		staleTime: 60 * 60 * 24, // 1 day
		initialData: initialData,
	});
}
