import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {name, email, phone, resumeUrl, linkedinUrl, githubUrl, jobId} = await req.json();
    
    const application = await db.application.create({
        data: {
            name,
            email,
            phone,
            resumeUrl,
            linkedinUrl,
            githubUrl,
            jobId
        }
    })
  } catch (error) {
    console.log("[APPLICATIONS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
