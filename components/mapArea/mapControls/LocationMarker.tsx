import React from "react";
import { Marker, Popup } from "react-map-gl";
import BodyText from "@/components/texts/BodyText";
import Image from "next/image";
import Title from "@/components/texts/Title";
import Caption from "@/components/texts/Caption";
import IconCaption from "@/components/IconCaption";
import { LiaCubeSolid } from "react-icons/lia";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import { defaultMedia, Listing } from "@/types";

interface LocationMarkerProps {
  listing: Listing;
  isSelected: boolean;
  onHover: () => void;
  onClose: () => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
  listing,
  isSelected,
  onHover,
  onClose,
}) => {

  const {
    address,
    location,
    zip,
    city,
    country,
    roomsBed,
    roomsBath,
    size,
    rent,
    media = defaultMedia,
  } = listing;

  return <>
    <Marker longitude={location[0]} latitude={location[1]}>
      <div className="group cursor-pointer" onClick={onHover}>
        <div className="flex items-center justify-center min-w-11 h-11 px-4 rounded-full bg-white group-hover:scale-125 transition-transform shadow-lg">
          <BodyText>€{rent}</BodyText>
        </div>
        <div className="w-[2px] h-3 bg-white mx-auto rounded-full shadow-lg" />
      </div>
    </Marker>

    {isSelected && (
      <Popup
        longitude={location[0]}
        latitude={location[1]}
        closeOnClick={false}
        onClose={onClose}
        anchor="top"
      >
        <div className="relative w-full h-[198px] overflow-hidden rounded-lg">
          <Image
            src={media[0].cdnUrl}
            alt={media[0].title}
            width={500}
            height={500}
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 pb-3">
        <Title className="font-semibold">{rent} € - {rent * 2} €</Title>
        <Caption className="font-semibold opacity-50">
          {address}, {zip} {city}, {country.toUpperCase()}
        </Caption>
          <div className="flex items-center justify-between gap-6 opacity-50">
            <IconCaption Icon={LiaCubeSolid} caption={`${size} m²`} />
            <IconCaption Icon={LiaBedSolid} caption={`${roomsBed} bed`} />
            <IconCaption Icon={PiBathtubLight} caption={`${roomsBath} bath`} />
          </div>
        </div>
      </Popup>
    )}
  </>
}

export default LocationMarker;
