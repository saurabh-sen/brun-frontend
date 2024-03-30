'use client'
import { IHomepageCarousel } from "@modals/home/home.types";
import React, { useRef } from "react";
import { useEffect } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { IProductListing } from "@modals/productListing/productListing.types";

const HomepageCarousel: React.FC<IHomepageCarousel> = ({
  heading,
  data
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
      <div className="flex justify-between mb-8">
        <div className="uppercase text-3xl font-normal font-urbanist">{heading}</div>
        <div className="flex gap-1 cursor-pointer">
          <Image src="/previcon.png" alt="backward" width={40} height={40} onClick={handlePrev} />
          <Image src="/nexticon.png" alt="forward" width={40} height={40} onClick={handleNext} />
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
        {
          data.map((item, index) =>
            <SwiperSlide key={index}>
              <HomepageCarouselItem {...item} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  );
};

const HomepageCarouselItem: React.FC<IProductListing> = ({ image, name, price }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-5 max-w-full">
      <Image
        className="relative max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src={image}
        width={596}
      />
      <div className="uppercase flex flex-col items-start justify-start gap-3">
        <div className="">FAUX FUR KNIT</div>
        <div className="">₹ 3,290.00</div>
      </div>
    </div>
  )
}

export default HomepageCarousel;