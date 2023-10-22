import JobBoard from "@/components/jobBoard/job-board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-3">
      <div className="text-lg w-full">
        <div className="text-center">
          Looking out for a new career opportunity?
          <br />
          Check out the jobs listed below and apply for the ones which match
          your skills.
        </div>
        {/* @ts-expect-error Server Component */}
        <JobBoard />
      </div>
    </main>
  );
}
