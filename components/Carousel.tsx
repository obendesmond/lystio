"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ListingTag from "./ListingTag";
import CustomIcon from "./CustomIcon";
import { CiBookmark } from "react-icons/ci";
import { Listing } from "@/types";

interface CarouselProps {
  media: Listing["media"];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ media, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  // Auto-slide effect with hover pause
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      id="indicators-carousel"
      className={`group relative w-full cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {media?.map((item, index) => (
          <div
            key={item.id}
            className={`scale-105 group-hover:scale-100 transition-all duration-500 ease-in-out absolute inset-0 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={item.cdnUrl}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        ))}
        <div className="bg-black w-full h-full absolute z-20 opacity-10" />
        <div className="absolute z-30 flex items-center justify-between top-0 w-full p-[10px]">
          <div className="flex items-center gap-2">
            <ListingTag text="new" />
            <ListingTag text="3D tour" />
          </div>
          <div className="bg-ly-white p-2 rounded-full">
            <CustomIcon Icon={CiBookmark} size={15} />
          </div>
        </div>
      </div>

      <div className="absolute z-30 flex items-center -translate-x-1/2 space-x-2 bottom-5 left-1/2">
        {media?.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`bg-white ${
              index === activeIndex ? "w-3 h-3" : "w-2 h-2"
            } rounded-full transition-all duration-200`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="hidden group-hover:flex transition-all duration-500 ease-in-out absolute top-0 left-0 z-30 items-center justify-center h-full px-4 cursor-pointer outline-none"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ly-white hover:bg-white/50 ">
          <svg
            className="w-4 h-4 text-ly-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="hidden group-hover:flex transition-all duration-500 ease-in-out absolute top-0 right-0 z-30 items-center justify-center h-full px-4 cursor-pointer outline-none"
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ly-white hover:bg-white/50">
          <svg
            className="w-4 h-4 text-ly-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
