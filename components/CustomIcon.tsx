import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    Icon:IconType,
    size?:number,
    className?:string
}

function CustomIcon({Icon, className, size = 20}:Props) {

  return (
    <Icon className={`cursor-pointer ${className}`} size={size} />
  )
}

export default CustomIcon