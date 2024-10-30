"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { GrandLocation, Listing } from "@/types";
import { MAX_PRICE, MIN_PRICE } from "@/utils/constants";

const baseUrl = "https://api.lystio.co";

interface AppContextType {
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>
  priceRangeIsOpen:boolean;
  setPriceRangeIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean;
  listings: Listing[];
  grandLocation: GrandLocation | null;
  fetchListings: () => void;
  reset: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [grandLocation, setGrandLocation] = useState<GrandLocation | null>(null)
  const [priceRangeIsOpen, setPriceRangeIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchListings(minPrice, maxPrice);
  }, []);

  const fetchListings = async (min = minPrice, max = maxPrice) => {
    setLoading(true)
    const requestData = {
      filter: {
        rent: [min, max],
      },
      paging: {
        pageSize: 20,
        page: 0,
      },
    };

    try {
      const [listingsResponse, locationResponse] = await Promise.all([
        axios.post(`${baseUrl}/tenement/search`, requestData),
        axios.post(`${baseUrl}/tenement/search/map`, {
          filter: requestData.filter,
          zoom: 0,
          bbox: null,
        }),
      ]);

      setListings(listingsResponse.data.res);
      setGrandLocation(locationResponse.data[0]);

      console.log("Response data res:", listingsResponse.data.res);
      console.log("location res:", locationResponse.data[0]);
    } catch (error) {
      console.error("Error making POST request:", error);
      // Optionally show an error message to the user here
    } finally {
      setLoading(false)
    }
  };

  const reset = () => {
    setMinPrice(MIN_PRICE)
    setMaxPrice(MAX_PRICE)

    fetchListings(MIN_PRICE, MAX_PRICE)
  }

  return (
    <AppContext.Provider
      value={{
        listings,
        fetchListings,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        priceRangeIsOpen,
        setPriceRangeIsOpen,
        reset,
        grandLocation,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
