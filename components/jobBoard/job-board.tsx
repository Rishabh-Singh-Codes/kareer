import { db } from "@/lib/db";
import JobCategory from "./job-category";

const JobBoard = async () => {
    const jobs = await db.job.findMany({
      where: {
        isOpen: true,
      },
    });

  const categories = jobs.reduce((acc: string[], curr) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }

    return acc;
  }, []);

  return (
    <div className="mt-3 mb-3 border-4 border-slate-500 rounded-xl w-full p-3 flex flex-col">
      {jobs.length ? (
        <JobCategory categories={categories} jobs={jobs} />
      ) : (
        <h1>No positions open at the moment.</h1>
      )}
    </div>
  );
};

export default JobBoard;
