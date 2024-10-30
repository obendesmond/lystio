"use client"
import React, { useState } from 'react'
import ListingHeader from './ListingHeader'
import ListingItem from './ListingItem'
import { useAppContext } from "@/context/AppContext";

function ListingsArea() {
  const [filterType, setFilterType] = useState(1)
  const {listings} = useAppContext()

  return (
    <div className='flex-[0.5] h-full shadow-md overflow-y-scroll hide-scroll-bar'>
      <ListingHeader filterType={filterType} setFilterType={setFilterType} />
      <div className={`px-8 py-4 grid grid-cols-2 gap-8`}>
        {listings.map(l => <ListingItem key={l.id} listing={l} />)}
      </div>
    </div>
  )
}

export default ListingsArea