import React from "react";
import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/jobDetails/Sidebar";
import JobDescription from "@/app/components/jobDetails/JobDescription";
import CompanyProfile from "@/app/components/jobDetails/CompanyProfile";

const Jobs = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[70%] ">
        <JobDescription />

        <CompanyProfile />
      </div>
      <div className="w-[30%] ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Jobs;
