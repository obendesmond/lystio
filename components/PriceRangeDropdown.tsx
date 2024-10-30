"use client";

import React, { useEffect, useRef } from "react";
import BodyText from "./texts/BodyText";
import CustomIcon from "./CustomIcon";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useAppContext } from "@/context/AppContext";

interface PriceRangeDropdownProps {
  onSearch?: (min: number, max: number) => void;
}

const PriceRangeDropdown: React.FC<PriceRangeDropdownProps> = () => {
  const {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    priceRangeIsOpen,
    setPriceRangeIsOpen,
    fetchListings,
    reset,
    loading
  } = useAppContext();

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Create a ref for the dropdown

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
    }
  };

  // Function to handle click outside of the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setPriceRangeIsOpen(false);
    }
  };

  // Set up event listener on mount and cleanup on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        onClick={() => setPriceRangeIsOpen(!priceRangeIsOpen)}
        className="flex gap-1 items-center cursor-pointer"
      >
        <BodyText>
          Price: €{minPrice} - €{maxPrice}
        </BodyText>
        <CustomIcon Icon={MdOutlineKeyboardArrowDown} className="" />
      </div>

      {priceRangeIsOpen && (
        <div className="absolute mt-2 w-[300px] bg-white rounded-lg shadow-ly-1 z-10 p-4">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Range Slider */}
          <div className="relative mb-6 mt-4">
            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
            <input
              id="labels-range-input"
              type="range"
              value={maxPrice}
              min={0}
              max={10000}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={handleRangeChange}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 -bottom-6">Min (€0)</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6">Max (€10000)</span>
          </div>

          <div className="flex gap-4 mt-8 w-full">
            <button
              onClick={reset}
              className="flex-[0.3] py-2"
            >
              Reset
            </button>
            <button
              onClick={() => !loading && fetchListings()}
              className="flex-1 bg-ly-purple text-white py-2 rounded-lg hover:bg-ly-voilet transition-colors"
            >
              {loading ? 'Loading' : 'Filter'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeDropdown;
