"use client";

import React, { useState } from "react";
import {
  Job,
  Message,
  Payment,
  DropDown,
  Bell,
} from "../../../../public/assets/icons";
import LogImg from "../../../../public/Rectangle 5.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` w-full z-20 h-fit  `}>
      <nav className="flex  justify-between   px-3  py-3 items-center w-full border-b-[0.2px] border-[0.2px]  border-b-gray-200 top-0  bg-white">
        {/* Logo */}
        <div className="">
          <div className="flex ">
            <p className="cursor-pointer  flex">
              <svg
                width="100"
                height="61"
                viewBox="0 0 100 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="61" fill="#E7E7E7" />
                <path
                  d="M30.68 23.38V38H28.12V23.38H30.68ZM28.56 38V35.64H36.78V38H28.56ZM37.7464 33.04C37.7464 32.0133 37.9731 31.1133 38.4264 30.34C38.8797 29.5533 39.5064 28.94 40.3064 28.5C41.1064 28.06 42.0131 27.84 43.0264 27.84C44.0531 27.84 44.9597 28.06 45.7464 28.5C46.5464 28.94 47.1731 29.5533 47.6264 30.34C48.0797 31.1133 48.3064 32.0133 48.3064 33.04C48.3064 34.0667 48.0797 34.9733 47.6264 35.76C47.1731 36.5333 46.5464 37.14 45.7464 37.58C44.9597 38.02 44.0531 38.24 43.0264 38.24C42.0131 38.24 41.1064 38.02 40.3064 37.58C39.5064 37.14 38.8797 36.5333 38.4264 35.76C37.9731 34.9733 37.7464 34.0667 37.7464 33.04ZM40.1864 33.04C40.1864 33.64 40.3064 34.1667 40.5464 34.62C40.7997 35.0733 41.1331 35.4267 41.5464 35.68C41.9731 35.9333 42.4664 36.06 43.0264 36.06C43.5864 36.06 44.0797 35.9333 44.5064 35.68C44.9331 35.4267 45.2664 35.0733 45.5064 34.62C45.7464 34.1667 45.8664 33.64 45.8664 33.04C45.8664 32.4267 45.7464 31.9 45.5064 31.46C45.2664 31.0067 44.9331 30.6533 44.5064 30.4C44.0797 30.1467 43.5864 30.02 43.0264 30.02C42.4664 30.02 41.9731 30.1467 41.5464 30.4C41.1331 30.6533 40.7997 31.0067 40.5464 31.46C40.3064 31.9 40.1864 32.4267 40.1864 33.04ZM49.6805 32.84C49.6805 31.88 49.8738 31.0267 50.2605 30.28C50.6605 29.52 51.2138 28.92 51.9205 28.48C52.6271 28.04 53.4471 27.82 54.3805 27.82C55.2205 27.82 55.9405 28.0067 56.5405 28.38C57.1405 28.74 57.5605 29.2467 57.8005 29.9L57.5405 30.12L57.7405 28.12H60.0005V37.5C60.0005 38.5933 59.7871 39.54 59.3605 40.34C58.9471 41.1533 58.3538 41.7733 57.5805 42.2C56.8205 42.64 55.9005 42.86 54.8205 42.86C53.4071 42.86 52.2471 42.48 51.3405 41.72C50.4338 40.96 49.9005 39.92 49.7405 38.6H52.1805C52.2605 39.24 52.5271 39.74 52.9805 40.1C53.4471 40.46 54.0605 40.64 54.8205 40.64C55.6605 40.64 56.3271 40.3933 56.8205 39.9C57.3271 39.42 57.5805 38.7667 57.5805 37.94V35.48L57.8605 35.74C57.6205 36.3667 57.1805 36.8667 56.5405 37.24C55.9005 37.6133 55.1605 37.8 54.3205 37.8C53.3871 37.8 52.5738 37.5867 51.8805 37.16C51.1871 36.7333 50.6471 36.1467 50.2605 35.4C49.8738 34.6533 49.6805 33.8 49.6805 32.84ZM52.1405 32.78C52.1405 33.34 52.2471 33.84 52.4605 34.28C52.6871 34.7067 53.0005 35.0467 53.4005 35.3C53.8005 35.5533 54.2671 35.68 54.8005 35.68C55.3605 35.68 55.8405 35.56 56.2405 35.32C56.6538 35.0667 56.9671 34.7267 57.1805 34.3C57.4071 33.86 57.5205 33.3533 57.5205 32.78C57.5205 32.2067 57.4138 31.7133 57.2005 31.3C56.9871 30.8733 56.6738 30.54 56.2605 30.3C55.8605 30.06 55.3738 29.94 54.8005 29.94C54.2538 29.94 53.7805 30.0667 53.3805 30.32C52.9805 30.56 52.6738 30.8933 52.4605 31.32C52.2471 31.7467 52.1405 32.2333 52.1405 32.78ZM61.9456 33.04C61.9456 32.0133 62.1723 31.1133 62.6256 30.34C63.079 29.5533 63.7056 28.94 64.5056 28.5C65.3056 28.06 66.2123 27.84 67.2256 27.84C68.2523 27.84 69.159 28.06 69.9456 28.5C70.7456 28.94 71.3723 29.5533 71.8256 30.34C72.279 31.1133 72.5056 32.0133 72.5056 33.04C72.5056 34.0667 72.279 34.9733 71.8256 35.76C71.3723 36.5333 70.7456 37.14 69.9456 37.58C69.159 38.02 68.2523 38.24 67.2256 38.24C66.2123 38.24 65.3056 38.02 64.5056 37.58C63.7056 37.14 63.079 36.5333 62.6256 35.76C62.1723 34.9733 61.9456 34.0667 61.9456 33.04ZM64.3856 33.04C64.3856 33.64 64.5056 34.1667 64.7456 34.62C64.999 35.0733 65.3323 35.4267 65.7456 35.68C66.1723 35.9333 66.6656 36.06 67.2256 36.06C67.7856 36.06 68.279 35.9333 68.7056 35.68C69.1323 35.4267 69.4656 35.0733 69.7056 34.62C69.9456 34.1667 70.0656 33.64 70.0656 33.04C70.0656 32.4267 69.9456 31.9 69.7056 31.46C69.4656 31.0067 69.1323 30.6533 68.7056 30.4C68.279 30.1467 67.7856 30.02 67.2256 30.02C66.6656 30.02 66.1723 30.1467 65.7456 30.4C65.3323 30.6533 64.999 31.0067 64.7456 31.46C64.5056 31.9 64.3856 32.4267 64.3856 33.04Z"
                  fill="#DC4A2D"
                />
              </svg>
            </p>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className="cursor-pointer lg:hidden flex "
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
              fill={`black`}
            />
            <path
              d="M21 10.25H3C2.59 10.25 2.25 9.91 2.25 9.5C2.25 9.09 2.59 8.75 3 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z"
              fill={`black`}
            />
            <path
              d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
              fill={`black`}
            />
            <path
              d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
              fill={`black`}
            />
          </svg>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="xl:hidden p-2 z-[9997] bg-white fixed w-screen top-[10px] right-[0px]">
              <div
                className={`xl:hidden flex flex-col gap-2 w-full p-4 rounded-lg`}
              >
                <div className="flex justify-between p-5">
                  <div className="font-bold">Logo</div>

                  <div
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-5 flex gap-5 text-[12px] leading-[1rem] font-semibold flex-col">
                  <div className="flex bg-[#DC4A2D] py-2 px-4 items-center gap-4 rounded-full">
                    <div>
                      <Job />
                    </div>
                    <div className="text-white">Jobs</div>
                  </div>
                  <div className="flex gap-2 py-2 hover:bg-[#dc4a2d] items-center rounded-full px-4 ">
                    <div className="relative">
                      <div className="absolute right-[0] top-0">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="3" cy="3" r="3" fill="#DC4A2D" />
                        </svg>
                      </div>
                      <Message />
                    </div>
                    <div className="text-[#B0B0B0]">Messages</div>
                  </div>
                  <div className=" px-4 flex gap-2 py-2 hover:bg-[#dc4a2d] items-center rounded-full">
                    <div>
                      <Payment />
                    </div>
                    <div className="text-[#B0B0B0]">Payments</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Middle Menu Desktop*/}
        <div className={` items-center lg:flex hidden `}>
          <ul className="flex items-center border-[0.5px] border-[#D1D1D1] rounded-full py-2 gap-20 px-4 ">
            <li className="xl:text-[20px] bg-[#DC4A2D] border-[2px] border-[#FCB4A5] py-4 px-4 rounded-[49px] justify-center items-center font-[500] cursor-pointer flex gap-2 leading-[27px] 2xl:text-[1.2rem]">
              <div className="">
                <Job />
              </div>
              <div className="text-white">Jobs</div>
            </li>{" "}
            <li className="xl:text-[20px]  font-[500] flex gap-2 justify-center items-center cursor-pointer leading-[27px] 2xl:text-[1.2rem]">
              <div className="relative">
                {/* Notification Dot */}
                <div className="absolute right-[0] top-0">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DC4A2D" />
                  </svg>
                </div>
                <Message />
              </div>
              <div className="text-[#B0B0B0]">Messages</div>
            </li>
            <li className="xl:text-[20px] leading-[27px] font-[500] flex gap-2 justify-center items-center  cursor-pointer 2xl:text-[1.2rem]">
              <div>
                <Payment />
              </div>
              <div className="text-[#B0B0B0]">Payments</div>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="items-center lg:flex hidden">
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <div className="absolute right-[4px] top-0">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DC4A2D" />
                </svg>
              </div>
              <Bell />
            </div>

            <div className="flex justify-center gap-1 items-center">
              <div>
                <Image
                  src={LogImg}
                  width={35}
                  height={35}
                  className="w-full h-full object-cover"
                  alt="img"
                />
              </div>
              <div className="flex justify-center items-center">
                <DropDown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
