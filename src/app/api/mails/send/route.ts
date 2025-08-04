import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	const { name, message } = await request.json();

	if (!name || !message)
		return NextResponse.json({ error: "invalid_parameters" }, { status: 400 });

	try {
		const nameParsed = name.trim();
		await resend.emails.send({
			from: `Portfólio | ${nameParsed} | <onboarding@resend.dev>`,
			to: "contatoenriquesantos@gmail.com",
			subject: `${nameParsed} te enviou uma mensagem`,
			text: message,
		});
		return NextResponse.json(null, { status: 201 });
	} catch (_error) {
		return NextResponse.json(
			{ error: "internal_server_error" },
			{ status: 500 },
		);
	}
}
