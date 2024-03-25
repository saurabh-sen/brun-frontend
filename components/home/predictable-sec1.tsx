'use client'
import React, { useRef} from "react";
import { useEffect } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


export type PredictableSec1Type = {
  giftsJustForYou?: string;
  newArrivalsRectangle?: string;
  rectangle117?: string;
  topsBottomsAboutRectangle?: string;
};

const PredictableSec1: React.FC<PredictableSec1Type> = ({
  giftsJustForYou,
  newArrivalsRectangle,
  rectangle117,
  topsBottomsAboutRectangle,
}) => {
  const swiperRef = useRef<SwiperCore>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className=" w-full relative max-w-full text-left font-urbanist lg:pb-[65px]">
      <div className="flex flex-row justify-between  w-full mb-8">
        <div className="uppercase font-normal font-urbanist">{giftsJustForYou}</div>
        <div className="justify-end flex flex-row gap-1 cursor-pointer">
          <img src="Frame 139.png" alt="backward" width="20%" onClick={handlePrev} />
          <img src="frame-99@2x.png" alt="forward" width="20%" onClick={handleNext} />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 1000 }} 
        ref={swiperRef}
      >
        
        <SwiperSlide>
        
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={newArrivalsRectangle}
            />
            <div className="w-[108px] h-[89px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={rectangle117}
            />
            <div className="w-[108px] h-[49px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>

        {/* Third card */}
        <SwiperSlide>
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={topsBottomsAboutRectangle}
            />
            <div className="w-[108px] h-[49px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>  
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={topsBottomsAboutRectangle}
            />
            <div className="w-[105px] h-[49px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={topsBottomsAboutRectangle}
            />
            <div className="w-[105px] h-[49px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              loading="eager"
              alt=""
              src={topsBottomsAboutRectangle}
            />
            <div className="w-[105px] h-[49px] flex flex-col items-start justify-start gap-[12px_0px]">
              <div className="relative uppercase">FAUX FUR KNIT</div>
              <div className="relative uppercase whitespace-nowrap">₹ 3,290.00</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PredictableSec1;