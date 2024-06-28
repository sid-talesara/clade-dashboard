import React from "react";

const PrimaryBtn = ({ children }: any) => {
  return (
    <div className="bg-[#DC4A2D] gap-3 flex justify-center items-center text-white rounded-[8px] xl:h-[46px] xl:w-[172px] w-[100px] h-[30px] border-[2px] border-[#FED3CA]">
      {children}
    </div>
  );
};

export default PrimaryBtn;
