"use client"

import React from "react";
import listing_around_me from "@/public/icons/list-around-me.svg";
import Image from "next/image";
import H4 from "./texts/H4";
import Caption from "./texts/Caption";
import { BiSortAlt2 } from "react-icons/bi";
import CustomIcon from "./CustomIcon";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { SlGrid } from "react-icons/sl";
import IconHouse from "./IconHouse";
import { useAppContext } from "@/context/AppContext";

interface Props {
  filterType:number;
  setFilterType:React.Dispatch<React.SetStateAction<number>>;
}
function ListingHeader({filterType, setFilterType}:Props) {
  const {listings} = useAppContext()

  return (
    <div className="sticky top-0 z-40 px-8 pt-8 pb-5 border-b flex flex-col justify-between bg-ly-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={listing_around_me} alt="list around me" className="w-[30px] object-contain" />
          <H4>Listing around me</H4>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex bg-ly-gray-01 p-1 rounded-md">
            <IconHouse Icon={BsGrid3X3Gap} active={filterType === 0} onClick={() => setFilterType(0)} />
            <IconHouse Icon={FaList} active={filterType === 1} onClick={() => setFilterType(1)} />
            <IconHouse Icon={SlGrid} active={filterType === 2} onClick={() => setFilterType(2)} />
          </div>
          <div className="flex items-center gap-2">
            <Caption>Sort by Relevance</Caption>
            <CustomIcon Icon={BiSortAlt2} />
          </div>
        </div>
      </div>
      <div className="ml-10 mt-3">
        <Caption className="opacity-50">{listings?.length} properties</Caption>
      </div>
    </div>
  );
}

export default ListingHeader;
