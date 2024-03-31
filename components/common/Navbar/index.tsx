'use client';

import React from 'react';
import SideNavbar from './SideNav';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import SearchBox from '../SearchBox';
import Link from 'next/link';
import BrunB from '@public/icons/navbar/BrunB';
import BrunR from '@public/icons/navbar/BrunR';
import BrunU from '@public/icons/navbar/BrunU';
import BrunN from '@public/icons/navbar/BrunN';
import useScrollDirection from '@services/customHooks/useScrollDirection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import { setIsHomepageRoute, setIsSearchBarOpen, setIsSidebarOpen } from '@libs/features/homepage/homepageSlice';

const Navbar = () => {

  const { isHomepageRoute, isSearchBarOpen, isSidebarOpen } = useSelector((state: RootState) => state.homepage);
  const dispatch = useDispatch();
  const path = usePathname();
  const scrollDirection = useScrollDirection();

  const toggleSideNavbar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const toogleSearchBar = () => {
    dispatch(setIsSearchBarOpen(!isSearchBarOpen));
  }

  useEffect(() => {
    dispatch(setIsHomepageRoute(path === '/'))
  }, [path, dispatch])

  return (
    <>
      <header className={`navbar flex flex-col justify-stretch w-full fixed top-0 transition-all duration-500 z-10 ${isHomepageRoute ? 'bg-transparent backdrop-blur-[2px]' : 'bg-white'} `}>
        <div className="navbar__container flex items-center md:items-start justify-between pt-3 md:pt-7 px-6 bg-gradient-to-b from-[#00000094] via-[#00000024] to-transparent">
          <Link href="/" className="navbar__logo__container w-64 flex items-center gap-1 relative">
            <BrunB fill={isHomepageRoute ? "white" : "black"} className='w-6 md:w-16' />
            <BrunR fill={isHomepageRoute ? "white" : "black"} className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-full  md:-translate-x-[70px] scale-50" : ""}`} />
            <BrunU fill={isHomepageRoute ? "white" : "black"} className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-[220%] md:-translate-x-[140px] scale-50" : ""}`} />
            <BrunN fill={isHomepageRoute ? "white" : "black"} className={`transition-all duration-500 w-6 md:w-16 ${scrollDirection === "down" ? "-translate-x-[330%] md:-translate-x-[190px] scale-50" : ""}`} />
          </Link>
          <nav className={`navbar__links__primary hidden md:flex gap-14 text-base font-urbanist font-semibold ${isHomepageRoute ? "text-white" : "text-black"}`}>
            <Link href="/products">TOPS</Link>
            <Link href="/products">BOTTOM</Link>
            <Link href="/about"> ABOUT</Link>
          </nav>
          <div className="navbar__links__secondary  hidden md:flex items-center gap-16">
            {!isSearchBarOpen
              ? <span className={`material-symbols-rounded ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`} onClick={toogleSearchBar}>
                search
              </span>
              : (
                <div className='flex gap-2 cursor-pointer' onClick={toogleSearchBar}>
                  <p className={`font-medium text-base font-urbanist  ${isHomepageRoute ? "text-white" : "text-black"}`}>CLOSE</p>
                  <span className={`material-symbols-rounded ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`}>
                    close
                  </span>
                </div>
              )}
            <span className={`material-symbols-rounded ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`}>
              person
            </span>
            <span className={`material-symbols-rounded ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`}>
              favorite
            </span>
            <span className={`material-symbols-rounded ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`}>
              shopping_bag
            </span>
          </div>
          <div className="flex gap-3 items-center md:hidden">
            {!isSearchBarOpen
              ? <span className={`material-symbols-rounded text-3xl ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`} onClick={toogleSearchBar}>
                search
              </span>
              : (
                <div className='flex gap-2 cursor-pointer items-center' onClick={toogleSearchBar}>
                  <p className={`font-medium text-base font-urbanist  ${isHomepageRoute ? "text-white" : "text-black"}`} onClick={toogleSearchBar}>CLOSE</p>
                  <span className={`material-symbols-rounded text-3xl ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`}>
                    close
                  </span>
                </div>
              )}
            <span className={`material-symbols-rounded text-3xl ${isHomepageRoute ? "text-white" : "text-black"} cursor-pointer`} onClick={toggleSideNavbar}>
              menu
            </span>
          </div>
        </div>
        <SearchBox isOpen={isSearchBarOpen} />
        <SideNavbar isOpen={isSidebarOpen} onClose={toggleSideNavbar} />
      </header>
    </>

  );
};

export default Navbar;
