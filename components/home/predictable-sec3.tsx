'use client';
import React, { useRef } from "react";
import { useEffect } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export type PredictableSec3Type = {
  newArrivalText?: string;
  newArrivalsRectangle?: string;
  rectangle117?: string;
};

const PredictableSec3: React.FC<PredictableSec3Type> = ({
  newArrivalText,
  newArrivalsRectangle,
  rectangle117,
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
    <section className="w-full relative max-w-full text-left font-urbanist lg:pb-[65px]">
      <div className="flex flex-row justify-between w-full mb-8">
        <div className="uppercase font-normal font-urbanist">{newArrivalText}</div>
        <div className="justify-end flex flex-row gap-1 cursor-pointer">
          <img src="Frame 139.png" alt="backward" width="20%" onClick={handlePrev} />
          <img src="frame-99@2x.png" alt="forward" width="20%" onClick={handleNext} />
        </div>
      </div>
      <Swiper
        slidesPerView={2}
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
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              src={newArrivalsRectangle}
              alt="img"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              src={rectangle117}
              alt="img"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              src={newArrivalsRectangle}
              alt="img"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover"
              src={rectangle117}
              alt="img"
            />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PredictableSec3;
