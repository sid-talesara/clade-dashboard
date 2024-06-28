import React from "react";
import Atlas from "../../../../public/Rectangle 43.png";
type Props = {};
import Image from "next/image";
const CompanyProfile = (props: Props) => {
  return (
    <>
      {/* company Profile */}
      <div className="w-full  py-8 px-24  border-b-[0.2px]   border-b-gray-200">
        <div className="flex flex-col gap-10">
          <div className="flex gap-3 justify-start items-center">
            <div className="xl:w-[40px] xl:h-[40px] w-[25px] h-[25px]">
              <Image
                src={Atlas}
                alt="jij"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[#4F4F4F] font-[500] xl:text-[20px] text-[14px] leading-[27px]">
              Atlassian
            </div>
          </div>

          <div className="flex xl:flex-row flex-col gap-10 xl:justify-between">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D] text-[10px] xl:text-[14px] font-[500] leading-[19px]">
                  Company size
                </div>

                <div className="text-[#3D3D3D] font-[500] text-[12px] xl:text-[16px] leading-[21px]">
                  1k - 2k Employees
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D] xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                  Sector
                </div>

                <div className="text-[#3D3D3D] font-[500] text-[12px] xl:text-[16px] leading-[21px]">
                  Information Technology, Infrastructure
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D] xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                  Founded In
                </div>

                <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                  2019
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                  Type
                </div>

                <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px]  leading-[21px]">
                  Private
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                  Funding
                </div>

                <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                  Bootstrapped
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#6E6D6D]  xl:text-[14px] text-[10px] font-[500] leading-[19px]">
                  Founded by
                </div>

                <div className="text-[#3D3D3D] font-[500] xl:text-[16px] text-[12px] leading-[21px]">
                  Scott Farquhar, Mike Cannon-Brookes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
