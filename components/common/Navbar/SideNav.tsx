import React from "react";
import './navbar.css'
import Link from "next/link";
import { SIDENAVBARITEMS } from "@contants/homepage";

interface ISideNavbar {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavbar = ({ isOpen, onClose }: ISideNavbar) => {
  return (
    <div className={`sidenavbar fixed top-0 -left-full w-full h-full bg-white transition-all duration-300 pt-14 px-4 ${isOpen && "left-0"}`}>
      <div className="flex items-center gap-3 pb-16 cursor-pointer" onClick={onClose}>
        <span className='material-symbols-rounded cursor-pointer'>
          close
        </span>
        <span className="font-semibold">CLOSE</span>
      </div>

      <div className="flex flex-col gap-9 cursor-pointer">
        {
          SIDENAVBARITEMS.map((item, idx) => <SideNavbarItem key={idx} route={item.link} title={item.title} />)
        }
      </div>
    </div>
  );
};

interface ISideNavbarItem {
  route: string;
  title: string;
}

const SideNavbarItem = ({ route, title }: ISideNavbarItem) => {
  return (
    <Link href={route} className="flex justify-between font-semibold">
      <div className="">
        {title}
      </div>
      <span className="material-symbols-rounded cursor-pointer">
        arrow_forward_ios
      </span>
    </Link>
  )
}

export default SideNavbar;
