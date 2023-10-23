import JobApplication from "@/components/jobBoard/job-application";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { db } from "@/lib/db";
import displayDate from "@/lib/dispalyDate";
import { redirect } from "next/navigation";

interface JobIdPageProps {
  params: {
    jobId: string;
  };
}

const JobIdPage = async ({ params }: JobIdPageProps) => {
  const job = await db.job.findUnique({
    where: {
      jobId: params.jobId,
    },
  });

  if (!job) {
    redirect("/");
  }

  return (
    <div className="mt-3 mb-3 border-4 border-slate-500 rounded-xl w-full p-3 flex flex-col">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-black inline">{job.title}</h1>
        <h3 className="text-sm inline mb-2">
          <b>Id: </b>
          {job.jobId}
        </h3>
      </div>
      <span className="text-sm">
        <b>Date of posting: </b>
        {displayDate(job.createdAt)}
      </span>
      <h3 className="text-sm inline mb-5">
        <b>Department: </b>
        {job.category.toUpperCase()}
      </h3>
      <h3 className="text-sm inline mb-5">
        <b>Skills: </b>
        {job.skills.split(", ").map((skill) => (
          <Badge key={skill} variant="outline" className="mr-2">
            {skill}
          </Badge>
        ))}
      </h3>
      <b>Job Description: </b>
      <p className="text-sm mb-5">{job.description}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-1/3 m-auto">
            <b>Apply</b>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <JobApplication jobId={job.jobId} jobTitle={job.title}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobIdPage;
