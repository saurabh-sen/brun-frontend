import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { ButtonType } from '@enumsAndTypes/common/common.types'

export type PredictableSec2Type = {
  beyondPredictable?: string;
  experienceClothingThatTra?: string;

  /** Style props */
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
      className="w-[720px] flex flex-col items-center justify-start pt-0 px-5 pb-[100px] box-border gap-[50px_0px] max-w-full text-left text-31xl text-black font-urbanist mq825:gap-[50px_0px]"
      style={predictableSecStyle}
    >
      <h1 className="m-0 relative text-inherit uppercase font-semibold font-inherit inline-block max-w-full mq825:text-21xl mq450:text-11xl">
        {beyondPredictable}
      </h1>
      <div
        className="self-stretch relative text-sm uppercase text-center"
        style={experienceClothingThatStyle}
      >
        {experienceClothingThatTra}
      </div>
      <MyOutlinedButton  handleClick={() => console.log("clicked")} active ={false} >SHOP NOW</MyOutlinedButton>
    </div>
  );
};

export default PredictableSec2;
