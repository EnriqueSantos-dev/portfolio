import { LIMITE_PROJECTS, getAllProjects } from "@/services/get-projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get("locale") || "pt_BR";
	const skip = Number(searchParams.get("skip")) ?? 0;
	const first = Number(searchParams.get("first")) ?? LIMITE_PROJECTS;

	const projects = await getAllProjects(locale, skip, first);

	return NextResponse.json(projects);
}
