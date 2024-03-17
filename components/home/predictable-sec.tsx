import type { NextPage } from "next";

export type PredictableSecType = {
  featured?: string;
};

const PredictableSec: NextPage<PredictableSecType> = ({ featured }) => {
  return (
    <section className=" w-[1200px] flex flex-row items-start justify-start py-0 px-5 box-border relative max-w-full text-left text-11xl text-black font-urbanist">
      <div className="flex-1 flex flex-row items-start justify-start pt-0 pb-[49px] px-0 box-border max-w-full">
        <div className="w-[1809px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <h1 className="m-0 relative text-inherit uppercase font-normal font-inherit mq825:text-5xl mq450:text-lg">
            {featured}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PredictableSec;
