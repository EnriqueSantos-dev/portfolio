import { getAllProjects } from "@/services/get-projects";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60 * 60 * 24; // 24 hours

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get("locale") || "pt_BR";
	const skip = Number(searchParams.get("skip")) || 0;

	const projects = await getAllProjects(locale, skip);

	return NextResponse.json(projects);
}
