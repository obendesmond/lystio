import React from "react";
import Image from "next/image";
import routeplanner from "@/public/icons/route.svg";
import streetview from "@/public/icons/streetview.svg";
import BodyText from "@/components/texts/BodyText";

interface Props {
  d?: string;
}
function MapView({}: Props) {
  return (
    <div className="absolute bottom-5 left-5 z-10 flex gap-[11px]">
      <Item text="Streetview" img={streetview} />
      <Item text="Route Planner" img={routeplanner} />
    </div>
  );
}

interface ItemProps {
  text: string;
  img: string;
}
function Item({ text, img }: ItemProps) {
  return (
    <div className="flex gap-2 px-5 py-2 items-center bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer">
      <BodyText>{text}</BodyText>
      <Image src={img} alt="street view" className={"w-6 h-6 object-contain"} />
    </div>
  );
}

export default MapView;
