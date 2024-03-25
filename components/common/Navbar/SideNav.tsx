import React, { useState } from "react";
import './navbar.css'
const SideNavbar = ({ isOpen, onClose }) => {
  return (
    <div className={ `side-navbar ${isOpen ? "open" : ""}`}>
     <div className="absolute w-[342px] h-72 top-16 left-4">
        <div className="flex flex-row  items-center gap-3 pb-16 cursor-pointer">
           <img 
            src="/close.svg"
            alt="close"
            onClick={onClose}
           />
           <span className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]" onClick={onClose}>CLOSE</span>
        </div>

        <div className="flex flex-col gap-9 cursor-pointer">
            <div className="flex flex-row justify-between gap">
            <div className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
            TOPS
           </div>
           <img 
           src="/transform.svg"
           alt="transform"
           />
            </div>
            <div className="flex flex-row justify-between">
            <div className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
           BOTTOMS
           </div>
           <img 
           src="/transform.svg"
           alt="transform"
           />
            </div>
            <div className="flex flex-row justify-between">
            <div className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
            PROFILE
           </div>
           <img 
           src="/transform.svg"
           alt="transform"
           />
            </div>
            <div className="flex flex-row justify-between ">
            <div className="w-[2.938rem] relative tracking-[0.1em] font-semibold inline-block [text-shadow:0px_4px_24px_rgba(0,_0,_0,_0.35)]">
            ABOUT
           </div>
           <img 
           src="/transform.svg"
           alt="transform"
           />
            </div>

        </div>

     </div>
    </div>
  );
};

export default SideNavbar;
