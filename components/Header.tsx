import React from 'react'
import Image from 'next/image';
import logo from "@/public/icons/logo.svg"
import Search from './Search';
import Profile from './Profile';
import BottomHeader from "./BottomHeader"

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className='py-4 px-7 flex items-center justify-between border-b bg-ly-white'>
          <Image src={logo} alt="logo" className='cursor-pointer w-[80px] object-contain' />
          <Search />
          <Profile />
      </div>
      <div className="px-5">
          <BottomHeader />
      </div>
    </header>
  )
}

export default Header