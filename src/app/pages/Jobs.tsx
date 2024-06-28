import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/jobDetails/Sidebar";

type Props = {};

const Jobs = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Jobs;
