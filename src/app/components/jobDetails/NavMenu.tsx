const NavMenu = () => {
  return (
    <ul className="bg-white overflow-x-auto px-24  flex justify-start items-start xl:gap-10 gap-5  border-[0.2px]  border-b-gray-200">
      <li className="xl:text-[20px] border-b py-6 border-1/2 border-[#DC4A2D]  text-[12px] cursor-pointer  leading-[27px] font-[500] text-[#DC4A2D] ">
        <div>Job Preview</div>
      </li>
      <li className="xl:text-[20px]  py-6 text-[12px] cursor-pointer leading-[27px] font-[500] text-[#888888] ">
        Applicants
      </li>
      <li className="xl:text-[20px]  py-6 text-[12px] cursor-pointer leading-[27px] font-[500] text-[#888888] ">
        Match
      </li>
      <li className="xl:text-[20px]   py-6 text-[12px] cursor-pointer leading-[27px] font-[500] text-[#888888] ">
        Messages
      </li>
    </ul>
  );
};

export default NavMenu;
