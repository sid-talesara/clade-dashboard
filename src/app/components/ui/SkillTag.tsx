import Image from "next/image";
import React from "react";

const SkillTag = ({ tag, image }: any) => {
  return (
    <div className="flex gap-1 w-fit text-xs tect-[#344054] m-1 border rounded-md py-1 px-[6px] ">
      <Image src={`/assets/${image}`} width={16} height={16} alt={""} />
      {tag}
    </div>
  );
};

export default SkillTag;

{
  /* {tagsData.map(({ id, tag, image }) => (
        <span key={id}>
          <SkillTag tag={tag} image={image} />
        </span>
      ))} */
}
// import { tagsData } from "../../data/data";
// import SkillTag from "../ui/SkillTag";
