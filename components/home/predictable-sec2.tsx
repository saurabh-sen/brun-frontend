'use client'
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MyOutlinedButton from '@components/common/MyOutlinedButton'
export type PredictableSec2Type = {
  beyondPredictable?: string;
  experienceClothingThatTra?: string;

  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
};

const PredictableSec2: NextPage<PredictableSec2Type> = ({
  beyondPredictable,
  experienceClothingThatTra,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const predictableSecStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const experienceClothingThatStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div
      className="w-[720px] flex flex-col items-center justify-start pb-[100px] box-border gap-[50px_0px] max-w-full text-left text-31xl text-black font-urbanist mq825:gap-[50px_0px]"
      style={predictableSecStyle}
    >
      <h1 className="m-0 relative text-inherit uppercase font-inherit inline-block max-w-full mq825:text-21xl mq450:text-11xl font-extrabold text-3xl">
        {beyondPredictable}
      </h1>
      <div
        className="self-stretch relative text-sm uppercase text-center"
        style={experienceClothingThatStyle}
      >
        {experienceClothingThatTra}
      </div>
      <MyOutlinedButton  handleClick={() => console.log("clicked")} active ={false} className="!py-5 !px-20 ">SHOP NOW</MyOutlinedButton>
    </div>
  );
};

export default PredictableSec2;
