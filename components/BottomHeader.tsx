import React from "react";
import Image from "next/image";
import BodyText from "./texts/BodyText";
import CustomIcon from "./CustomIcon";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import hicon from "@/public/icons/hicon.svg"

const data = [
  "Rent",
  "Apartment",
  "Property type",
  "Beds/baths",
  "Living rooms",
  "Pets",
  "Deposit",
];

function BottomHeader() {
  return (
    <div className="flex gap-5 bg-ly-white p-5 rounded-md shadow-md">
      {data.map((el, i) => (
        <div key={i} className="flex gap-1 items-center cursor-default opacity-50">
          <BodyText>{el}</BodyText>
          <CustomIcon Icon={MdOutlineKeyboardArrowDown} />
        </div>
      ))}
        <PriceRangeDropdown />
       <div className="flex gap-2 items-center cursor-default opacity-50">
          <BodyText>
            All
          </BodyText>
          <Image src={hicon} alt="filter icon" className="w-6 h-6 object-contain" />
        </div>
    </div>
  );
}

export default BottomHeader;
