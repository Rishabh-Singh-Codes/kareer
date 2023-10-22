"use client";

import { Job } from "@prisma/client";
import { useState } from "react";
import { Button } from "../ui/button";
import JobList from "./job-list";

interface JobCategoryProps {
  categories: string[];
  jobs: Job[];
}

const JobCategory = ({categories, jobs}: JobCategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  if(selectedCategory !== "all"){
    jobs = jobs.filter(job => job.category === selectedCategory);
  }

  return (
    <div className="w-full flex flex-wrap mt-5 mb-3 border-b-slate-700">
      {categories.length && (
        <>
          <Button
            className="mr-2 mb-2"
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
          >
            ALL
          </Button>
          {categories?.map((category) => (
            <Button
              key={category}
              className="mr-2 mb-2 uppercase"
              variant={
                selectedCategory === `${category}` ? "default" : "outline"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </>
      )}
      <JobList jobs={jobs}/>
    </div>
  );
};

export default JobCategory;
