'use client';

import React from 'react';
import SideNavbar from './SideNav';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SearchBox from '../SearchBox';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@libs/store';
import { setIsHomepageRoute, setIsSearchBarOpen, setIsSidebarOpen } from '@libs/features/homepage/homepageSlice';
import { setCartPageActiveTab } from '@libs/features/cart/cartSlice';
import BrunLogo from '../BrunLogo';

const Navbar = () => {

  const { 
    // isHomepageRoute, 
    isSearchBarOpen, isSidebarOpen } = useSelector((state: RootState) => state.homepage);
  const dispatch = useDispatch();
  const path = usePathname();
  const router = useRouter();

  const toggleSideNavbar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const toogleSearchBar = () => {
    dispatch(setIsSearchBarOpen(!isSearchBarOpen));
  }

  const handleRouteToCart = (tab: 1 | 2) => {
    dispatch(setCartPageActiveTab(tab));
    router.push('/account/cart');
  }

  useEffect(() => {
    dispatch(setIsHomepageRoute(path === '/'))
  }, [path, dispatch])

  return (
    <>
      <header className="navbar flex flex-col justify-stretch w-full fixed top-0 transition-all duration-500 z-10 bg-transparent backdrop-blur-[2px]">
        <div className="navbar__container flex items-center md:items-start justify-between pt-3 md:pt-7 px-6 bg-gradient-to-b from-[#00000094] via-[#00000024] to-transparent">
          <Link href="/" className="navbar__logo__container ">
            <BrunLogo />
          </Link>
          <nav className="navbar__links__primary hidden md:flex gap-14 text-base font-urbanist font-semibold">
            <Link href="/products">TOPS</Link>
            <Link href="/products">BOTTOM</Link>
            <Link href="/about"> ABOUT</Link>
          </nav>
          <div className="navbar__links__secondary  hidden md:flex items-center gap-16">
            {!isSearchBarOpen
              ? <span className="material-symbols-rounded cursor-pointer" onClick={toogleSearchBar}>
                search
              </span>
              : (
                <div className='flex gap-2 cursor-pointer' onClick={toogleSearchBar}>
                  <p className="font-medium text-base font-urbanist">CLOSE</p>
                  <span className="material-symbols-rounded cursor-pointer">
                    close
                  </span>
                </div>
              )}
            <Link href='/account'>
              <span className="material-symbols-rounded cursor-pointer">
                person
              </span>
            </Link>
            <span className="material-symbols-rounded cursor-pointer" onClick={() => handleRouteToCart(2)}>
              favorite
            </span>
            <span className="material-symbols-rounded cursor-pointer" onClick={() => handleRouteToCart(1)}>
              shopping_bag
            </span>
          </div>
          <div className="flex gap-3 items-center md:hidden">
            {!isSearchBarOpen
              ? <span className="material-symbols-rounded text-3xl cursor-pointer" onClick={toogleSearchBar}>
                search
              </span>
              : (
                <div className='flex gap-2 cursor-pointer items-center' onClick={toogleSearchBar}>
                  <p className="font-medium text-base font-urbanist" onClick={toogleSearchBar}>CLOSE</p>
                  <span className="material-symbols-rounded text-3xl cursor-pointer">
                    close
                  </span>
                </div>
              )}
            <span className="material-symbols-rounded text-3xl cursor-pointer" onClick={toggleSideNavbar}>
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
