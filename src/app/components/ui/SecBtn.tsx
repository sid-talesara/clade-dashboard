import React from "react";

const SecBtn = ({ children }: any) => {
  return (
    <div className="bg-[#FEF4F2] flex justify-center  gap-3 items-center text-[#DC4A2D] rounded-[8px] xl:h-[46px] xl:w-[172px] w-[100px] h-[30px]  border-[0.8px] border-[#DC4A2D]">
      {children}
    </div>
  );
};

export default SecBtn;
