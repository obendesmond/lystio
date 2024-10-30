import React from 'react'
import MapArea from './mapArea/MapArea'
import ListingsArea from './ListingsArea'

function MapAndList() {
  return (
    <div className='flex h-[calc(100vh-152px)]'>
        <MapArea />
        <ListingsArea />
    </div>
  )
}

export default MapAndList