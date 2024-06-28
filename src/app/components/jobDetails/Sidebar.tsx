import React from "react";
import {
  Applicant,
  Bin,
  Eye,
  Match,
  Message,
  MessageSidebar,
  Pen,
} from "../../../../public/assets/icons";
import SecBtn from "../ui/SecBtn";
import PrimaryBtn from "../ui/PrimaryBtn";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="bg-[#fcfcfc] xl:w-[30%] max-w-[450px] w-full flex flex-col h-[1800px] border-l-gray-200">
        <div className="w-full p-4 xl:p-10 border-l h-full  border-l-gray-200 border-b-gray-200">
          {/* btn group */}
          <div className="flex justify-center gap-4 items-center">
            <SecBtn>
              <div>
                <Bin />
              </div>
              <div className="xl:text-[16px] text-[10px]">Delete</div>
            </SecBtn>

            <PrimaryBtn>
              <div>
                <Pen />
              </div>
              <div className="xl:text-[16px] text-[10px]">Edit Job</div>
            </PrimaryBtn>
          </div>

          <div className="flex flex-col gap-8 justify-center w-full py-10  items-center">
            <div className="flex justify-between w-full border-b pb-3 border-b-gray-200 items-center">
              <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Applicant />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                  Applicants
                </div>
              </div>
              <div className="font-[600] text-[9px] xl:text-[20px] leading-[27px]">
                400
              </div>
            </div>

            <div className="flex justify-between w-full border-b pb-3 border-b-gray-200 items-center">
              <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Match />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                  Matches
                </div>
              </div>
              <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
                100
              </div>
            </div>

            <div className="flex justify-between w-full border-b pb-3  border-b-gray-200 items-center">
              <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <MessageSidebar />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                  Messages
                </div>
              </div>
              <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
                147
              </div>
            </div>

            <div className="flex justify-between w-full pb-2 border-b-gray-200 items-center">
              <div className="flex justify-center gap-3">
                <div className="flex gap-2">
                  <Eye />
                </div>
                <div className="text-[#4F4F4F] font-[500] text-[9px] xl:text-[16px] leading-[21px]">
                  Views
                </div>
              </div>
              <div className="font-[600] text-[10px] xl:text-[20px] leading-[27px]">
                800
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
