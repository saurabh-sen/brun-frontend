"use client";
import React from "react";
import SideNavbar from "./SideNav";
import { useState, useEffect } from "react";
import './navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

  const toggleSideNavbar = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`max-w-full w-full md:w-aut self-stretch flex flex-row items-start justify-between pt-[1.875rem] pb-[1.875rem] pr-[3.75rem] box-border gap-[1.25rem] top-[0] z-[99] ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="h-[4.625rem] w-[20.9rem] relative flex items-center justify-center">
        <img
          loading="eager"
          alt=""
          src="/group-98.svg"
        />
      </div>
      <SideNavbar isOpen={isSideNavbarOpen} onClose={toggleSideNavbar} />
     <div className="nav-responsive-icons">
      <img
       loading="eager"
       alt=""
       src="/Search_4.png"
       width="100%"
       height="100%" 
      />
       <img
       loading="eager"
       alt=""
       src="/Search_4.svg"
       width="100%"
       height="100%" 
       onClick={toggleSideNavbar}/>
     
     </div>
      <nav className="m-0 h-[1.25rem] w-[25.375rem] flex flex-row items-end justify-start py-[0rem] pr-[1.813rem] pl-[0rem] box-border gap-[0rem_5.625rem] max-w-full text-left text-[1rem] text-black font-urbanist cursor-pointer links">
        <div className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
          TOPS
        </div>
        <div className="w-[5.5rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
          BOTTOMS
        </div>
        <div className="w-[3.875rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
          ABOUT
        </div>
      </nav>
      <div className="w-[18rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border cursor-pointer nav-icons">
        <div className="self-stretch h-[1.438rem] flex flex-row items-center justify-between gap-[1.25rem]">
          <div className="h-[1.094rem] w-[1.056rem] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(3.959)] text-white"
              loading="eager"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="h-[1.094rem] w-[0.931rem] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(4.356)]"
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
            <div className="w-[1.056rem] h-[1.013rem] relative flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(4.086)]"
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="h-[1.406rem] w-[1.056rem] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(3.959)]"
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
      </div>

     
    </header>
  );
};

export default Navbar;
