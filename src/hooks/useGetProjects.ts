"use client";

import { GetProjectsResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useGetProjects({
	locale = "pt_BR",
	skip = 0,
	initialData,
}: {
	locale?: string;
	skip?: number;
	initialData?: GetProjectsResponse;
}) {
	return useQuery({
		queryKey: ["projects"],
		queryFn: () =>
			fetch(`/api/projects?locale=${locale}&skip=${skip}`).then((res) =>
				res.json()
			),
		staleTime: 1000 * 60 * 60 * 24,
		initialData: initialData ?? undefined,
	});
}
