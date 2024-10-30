import React from 'react'
import BodyText from './texts/BodyText'
import globe from "@/public/icons/bordered-globe.svg"
import profileIcon from "@/public/icons/profile-logo.svg"
import Image from 'next/image'
import CustomIcon from './CustomIcon'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import ClickableImage from './ClickableImage'

function Profile() {
  return (
    <div className='flex items-center gap-8'>
        <BodyText>Advertise</BodyText>
        <ClickableImage img={globe} className='w-8 h-8 object-contain' />
        <div className='flex gap-1 items-center cursor-pointer'>
            <Image src={profileIcon} alt="profile icon" className='w-8 h-8 object-contain' />
            <CustomIcon Icon={MdOutlineKeyboardArrowDown} />
        </div>
    </div>
  )
}

export default Profile