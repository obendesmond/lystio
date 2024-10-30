import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import Caption from "./texts/Caption";
import BodyText from "./texts/BodyText";
import { LiaCubeSolid, LiaBedSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import Title from "./texts/Title";
import Carousel from "./Carousel";
import IconCaption from "./IconCaption";
import { defaultMedia, Listing } from "@/types";
import { formatDateMMDDYYYY } from "@/utils";

interface ListingProps {
  listing: Listing;
}

const ListingItem: React.FC<ListingProps> = ({ listing }) => {
  const {
    title,
    address,
    zip,
    city,
    country,
    roomsBed,
    roomsBath,
    size,
    rent,
    availableFrom,
    verified,
    media = defaultMedia,
  } = listing;

  return (
    <div className="flex flex-col gap-4 w-full">
      <Carousel media={media} className="h-[250px]" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <IconCaption
            Icon={VscVerifiedFilled}
            caption="Verified"
            className={`${verified ? "text-ly-voilet" : "opacity-50"}`}
          />
          <Caption className="opacity-50">5 days ago</Caption>
        </div>
        <BodyText className="font-semibold truncate">{title}</BodyText>
        <Caption className="font-semibold opacity-50">
          {address}, {zip} {city}, {country.toUpperCase()}
        </Caption>
        <div className="flex items-center justify-between gap-6 opacity-50">
          <IconCaption Icon={LiaCubeSolid} caption={`${size} m²`} />
          <IconCaption Icon={LiaBedSolid} caption={`${roomsBed} - ${roomsBed * 2} beds`} />
          <IconCaption Icon={PiBathtubLight} caption={`${roomsBath} - ${roomsBath * 2} baths`} />
        </div>
        <Title className="font-semibold">{rent} € - {rent * 2} €</Title>
        <div className="flex gap-2">
          <Caption className="opacity-50">Available From:</Caption>
          <Caption>{formatDateMMDDYYYY(availableFrom) || "Immediately"}</Caption>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
