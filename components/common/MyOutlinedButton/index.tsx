"use client";
import { IMyOutlinedButton } from '@modals/common/common.types';
import React from 'react'

const MyOutlinedButton = ({ active, handleClick, children, className, type }: IMyOutlinedButton) => {
  return (
    <button className={`myoutlinedbutton flex justify-center items-center border border-black px-2 py-[2px] sm:px-2 sm:py-1 text-xs sm:text-sm ${active && 'text-white bg-black font-semibold'} ${className} `} onClick={handleClick} type={type}>
      {children}
    </button>
  )
}

export default MyOutlinedButton;