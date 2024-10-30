'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  img: string;
  route?: string;
  className?: string;
}
function ClickableImage({ img, route, className }: Props) {
  const router = useRouter()

  const handleClick = () => {
    if(route){
      router.push(route)
    }
  };

  return (
    <Image
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      src={img}
      alt={img}
    />
  );
}

export default ClickableImage;
