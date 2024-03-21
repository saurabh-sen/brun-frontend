"use client";
import React from 'react'

interface IMyOutlinedButton {
  active: boolean,
  handleClick: () => void,
  children: React.ReactNode,
  className?: string
}

const MyOutlinedButton = ({ active, handleClick, children, className }: IMyOutlinedButton) => {
  return (
    <button className={`myoutlinedbutton flex justify-center items-center border border-black px-2 py-[2px] sm:px-2 sm:py-1 text-xs sm:text-sm ${active && 'text-white bg-black'} ${className} `} onClick={handleClick}>
      {children}
    </button>
  )
}

export default MyOutlinedButton;