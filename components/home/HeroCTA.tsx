'use client'

import type { NextPage } from "next";
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { IHeroCTA } from "@modals/home/home.types";

const HeroCTA: NextPage<IHeroCTA> = ({ heading, description, route }) => {

  return (
    <div className="flex flex-col items-center uppercase gap-10 text-center">
      <h1 className="text-xl md:text-4xl font-semibold">
        {heading}
      </h1>
      <p className="text-xs md:text-sm max-w-[681px]">
        {description}
      </p>
      <MyOutlinedButton handleClick={() => console.log("clicked"+route)} active={false} className="!py-3 !px-20 font-bold ">SHOP NOW</MyOutlinedButton>
    </div>
  );
};

export default HeroCTA;
