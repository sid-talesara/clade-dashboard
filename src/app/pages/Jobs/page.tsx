import React from "react";
import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/jobDetails/Sidebar";
import JobDescription from "@/app/components/jobDetails/JobDescription";
import CompanyProfile from "@/app/components/jobDetails/CompanyProfile";
import NavMenu from "@/app/components/jobDetails/NavMenu";

const Jobs = () => {
  return (
    <div>
      <div className="sticky z-30 w-full top-0">
        <Navbar />
        <NavMenu />
      </div>
      <div className="w-full flex flex-row relative">
        <div className="w-[70%]">
          <JobDescription />
          <CompanyProfile />
        </div>
        <div className="w-[30%] ">
          <div className="fixed z-10  right-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
