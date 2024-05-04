"use client";
import { ButtonType, IMyOutlinedButton } from '@modals/common/common.types';
import React from 'react'

const MyOutlinedButton = ({ active, handleClick, children, className, type=ButtonType.BUTTON }: IMyOutlinedButton) => {
  return (
    <button className={`myoutlinedbutton flex justify-center items-center border border-black px-2 py-[2px] sm:px-2 sm:py-1 text-xs sm:text-sm ${active && 'border-2 font-semibold'} ${className} `} onClick={handleClick} type={type}>
      {children}
    </button>
  )
}

export default MyOutlinedButton;