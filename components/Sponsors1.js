import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/style.module.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Sponsors1() {
  return (
    <>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-[100%] h-[200px] lg:h-[300px] bg-white rounded-lg"
        >
          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <div className="">
              <div className="inline-flex ">
                <h1 className=" text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
                  Gold{" "}
                </h1>
              </div>
              <div className=" flex flex-col md:flex-row justify-around items-center ">
                <div>
                  <img
                    src="/Logo-JV-Micronics.png"
                    alt="logo"
                    className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
                  />
                  <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                    JV Micronics
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <div className="w-[200px] h-[200px] flex justify-center items-center p-4">
              <img src="/upsec.png" className={`${styles.responsive}`} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-[100%] h-[250px] lg:h-[300px] bg-white rounded-lg"
        >
          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <div>
              <div className="inline-flex text-center mt-4  ">
                <h1 className=" text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
                  Platinum{" "}
                </h1>
              </div>
              <div className=" flex flex-col md:flex-row justify-around items-center ">
                <div>
                  <img
                    src="/agmatel.png"
                    alt="logo"
                    className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
                  />
                  <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                    JV Micronics
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <div>
              <div className="inline-flex text-center mt-4 ">
                <h1 className=" text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
                  Gold{" "}
                </h1>
              </div>
              <div className=" flex flex-col md:flex-row justify-around items-center ">
                <div>
                  <img
                    src="/Logo-JV-Micronics.png"
                    alt="logo"
                    className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
                  />
                  <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                    JV Micronics
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
