"use client"

// import { RootState } from '@libs/store'
import BrunB from '@public/icons/navbar/BrunB'
import BrunN from '@public/icons/navbar/BrunN'
import BrunR from '@public/icons/navbar/BrunR'
import BrunU from '@public/icons/navbar/BrunU'
import { useScrollDirection } from '@services'
import React from 'react'
// import { useSelector } from 'react-redux'

const BrunLogo = () => {

    // const isHomepageRoute = useSelector((state: RootState) => state.homepage.isHomepageRoute);
    const scrollDirection = useScrollDirection();

    return (
        <div className="navbar__logo w-64 flex items-center gap-1 relative">
            <BrunB fill="black" className='w-6 md:w-16' />
            <BrunR fill="black" className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-full  md:-translate-x-[70px] scale-50" : ""}`} />
            <BrunU fill="black" className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-[220%] md:-translate-x-[140px] scale-50" : ""}`} />
            <BrunN fill="black" className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-[330%] md:-translate-x-[190px] scale-50" : ""}`} />
        </div>
    )
}

export default BrunLogo