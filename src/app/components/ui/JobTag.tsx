import React from "react";

type Props = {};

const JobTag = (props: Props) => {
  return (
    <div>
      <span className="bg-[#ECFDF3]  flex gap-1 items-center rounded-full text-[#17B26A] text-xs font-medium me-2 px-2.5 py-0.5  border border-green-400">
        <span className="w-2 h-2 bg-[#17B26a] rounded-full"></span>
        Open
      </span>
    </div>
  );
};

export default JobTag;
