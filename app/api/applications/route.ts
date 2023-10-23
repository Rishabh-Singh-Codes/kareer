import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {name, email, phone, resumeUrl, linkedinUrl, githubUrl, jobId} = await req.json();

    console.log("data in api: ", name, email, phone, resumeUrl, linkedinUrl, githubUrl, jobId);

    const alreadyApplied = await db.application.findFirst({
        where:{
            email,
            jobId
        }
    });

    if(alreadyApplied) {
        return NextResponse.json({message: "Already applied for this role with the provided email."});
    }
    
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
    });

    new Error

    return NextResponse.json({message: "Applied successfully.", status: 200, application});
  } catch (error) {
    console.log("[APPLICATIONS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
