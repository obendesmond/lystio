import React from 'react'
import Caption from './texts/Caption'

interface Props {
    text:string
}
function ListingTag({text}:Props) {
  return (
    <div className='py-1 px-2 bg-ly-white rounded-full'>
        <Caption className='capitalize'>{text}</Caption>
    </div>
  )
}

export default ListingTag