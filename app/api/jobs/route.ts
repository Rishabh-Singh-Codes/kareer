import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jobs = await db.job.findMany({
      where: {
        isOpen: true,
      },
    });

    const categories = jobs.reduce((acc: string[], curr) => {
        if(!acc.includes(curr.category)) {
            acc.push(curr.category);
        }

        return acc;
    }, []);

    return NextResponse.json({
      categories,
      jobs,
    });
  } catch (error) {
    console.log("[JOBS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
