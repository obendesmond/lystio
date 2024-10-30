import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

import ai_search from "@/public/icons/ai-search.svg";
import Image from "next/image";
import BodyText from "./texts/BodyText";
import CustomIcon from "./CustomIcon";

function Search() {
  return (
    <div className="flex justify-between gap-2 border p-1 rounded-full overflow-hidden min-w-[500px]">
      <input placeholder="Search" className="outline-none flex-1 px-2" />
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <Image src={ai_search} alt="ai search" />
          <BodyText>AI Search</BodyText>
          <CustomIcon Icon={MdOutlineKeyboardArrowDown} />
        </div>
        <div className="rounded-full p-2 bg-ly-purple hover:bg-ly-voilet inline-block cursor-pointer">
          <CustomIcon Icon={RiSearch2Line} size={24} className="text-ly-white" />
        </div>
      </div>
    </div>
  );
}

export default Search;
