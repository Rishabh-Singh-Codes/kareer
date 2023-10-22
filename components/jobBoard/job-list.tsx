import { Job } from "@prisma/client";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import displayDate from "@/lib/dispalyDate";

interface JobListProps {
  jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
  const router = useRouter();

  return (
    <>
      {jobs.length &&
        jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl mt-3 mb-3 min-h-[150px]
             flex flex-col p-3 hover:cursor-pointer hover:bg-slate-100
              dark:hover:bg-slate-900 transition hover:border-black dark:hover:border-white"
            onClick={() => router.push(`/jobs/${job.jobId}`)}
          >
            <div className="flex justify-between">
              <h1 className="text-xl font-black inline">{job.title}</h1>
            </div>
            <div className="flex justify-between">
              <h3 className="text-xs inline mb-2">
                <b>Department: </b>
                {job.category.toUpperCase()}
              </h3>
              <h3 className="text-xs inline mb-2">
                <b>Id: </b>
                {job.jobId}
              </h3>
            </div>
            <p className="text-sm mb-2">
              {job.description.slice(0, 250) + "..."}
            </p>
            <h3 className="text-sm inline">
              <b>Skills: </b>
              {job.skills.split(", ").map((skill) => (
                <Badge key={skill} variant="outline" className="mr-2">
                  {skill}
                </Badge>
              ))}
            </h3>
          </div>
        ))}
    </>
  );
};

export default JobList;
