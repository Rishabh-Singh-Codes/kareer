import { db } from "@/lib/db";
import JobCategory from "./job-category";
import JobList from "./job-list";

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
      <JobCategory categories={categories} jobs={jobs}/>
    </div>
  );
};

export default JobBoard;
