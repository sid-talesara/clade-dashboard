import React from "react";
import {
  Mark,
  Money,
  Bin,
  Pen,
  Eye,
  Match,
  Applicant,
  Message,
} from "../../../../public/assets/icons";
import Image from "next/image";
import { tagsData } from "../../data/data";

import SkillTag from "../ui/SkillTag";
import JobTag from "../ui/JobTag";
type Props = {};

const JobDescription = (props: Props) => {
  return (
    <div>
      {" "}
      <>
        <div className="w-full flex xl:flex-row flex-col  h-full border-l-gray-200 border-b-gray-200">
          <div className=" w-full flex  flex-col">
            {/* Job Heading */}
            <div className="w-full px-24 py-8 border-b-[0.2px]   border-b-gray-200">
              <div className="flex  flex-col  xl:gap-8 gap-3">
                <div className="flex justify-start flex-row  xl:items-center xl:gap-5 gap-3">
                  <div className="xl:text-[35px] text-[14px] text-[#3D3D3D] text-center font-[600] leading-[19px] xl:leading-[47px] ">
                    Senior Product Designer
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="xl:text-[14px] text-[9px] flex justify-center text-[#888888] text-center font-[500] leading-[18px] ">
                      <div>posted 2 days ago</div>
                    </div>
                  </div>
                  <JobTag />
                </div>
                <div className="flex justify-start items-start gap-5">
                  <div className="flex gap-3">
                    <div>
                      <Mark />
                    </div>
                    <div className="xl:text-[20px] text-[11px] leading-[27px] font-500">
                      Delaware, USA
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div>
                      <Money />
                    </div>
                    <div className="xl:text-[20px] text-[11px] leading-[27px] font-500">
                      $300k-$400k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* skills required */}
            <div className="w-full  px-24 py-8 border-b-[0.2px]   border-b-gray-200">
              <div className="xl:flex  xl:justify-between gap-10 grid grid-cols-1  items-start">
                <div className="flex flex-col gap-3">
                  <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                    Skills Required
                  </div>

                  <div>
                    {tagsData.map(({ id, tag, image }) => (
                      <span key={id}>
                        <SkillTag tag={tag} image={image} />
                      </span>
                    ))}{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                    Preferred Language
                  </div>
                  <div className="text-[#3D3D3D] font-[600] text-[13px] xl:text-[1rem] leading-[21px] ">
                    English
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                    Type
                  </div>
                  <div className="text-[#3D3D3D] font-[600] text-[13px] xl:text-[1rem]  leading-[21px] ">
                    Full time
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-[#6E6D6D] text-[11px] xl:text-[14px] font-[500] leading-[19px]">
                    Years of Experience
                  </div>
                  <div className="text-[#3D3D3D] font-[600] xl:text-[1rem] text-[13px] leading-[21px] ">
                    3+ Years of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* about the job */}
            <div className="w-full  px-24 py-8 border-b-[0.2px]   border-b-gray-200">
              <div className="xl:flex  xl:justify-between gap-10 grid grid-cols-2  flex-col items-start">
                <div className="flex flex-col gap-[6px]">
                  <div className="font-[500] xl:text-[14px] text-[9px] leading-[18px] text-[#6E6D6D]">
                    About the job
                  </div>
                  <div className="font-[500] text-base text-[10px] leading-[28px] text-[#3D3D3D]">
                    1. Handle the UI/UX research design <br />
                    2. Work on researching on latest web applications designs &
                    trends
                    <br /> 3. Work on conceptualizing and visualizing
                    <br /> 4. Work on creating graphics content and other
                    graphic related works
                    <br /> Benefits{" "}
                    <ol className="list-disc flex flex-col list-inside">
                      <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                        Health insurance
                      </li>
                      <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                        Provident Fund
                      </li>
                    </ol>
                    Schedule
                    <ol className="list-disc flex flex-col list-inside">
                      <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                        Day shift
                      </li>
                    </ol>
                    Supplemental pay types
                    <ol className="list-disc flex flex-col list-inside">
                      <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                        Performance bonus
                      </li>
                      <li className="font-[500] xl:text-[16px] text-[10px] leading-[28px] text-[#3D3D3D]">
                        Yearly bonus
                      </li>
                    </ol>
                    Work Location: In person
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default JobDescription;
