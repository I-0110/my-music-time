import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "@/app/lib/auth";
import { db } from "@/app/lib/db";

export async function POST(req: Request) {
    const session= await getServerSession(authOptions);
    if (!session || session.user?.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const { title, url, months, categories, grades } = body;

    const video = await db.video.create({
        data: {
            title,
            url,
            months,
            categories,
            grades,
            user: { connect: { email: session.user.email! } },
        },
    });

    return NextResponse.json(video);
}