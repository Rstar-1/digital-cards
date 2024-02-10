import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css";
import brand1 from "../../../assets/service1.png";
import brand2 from "../../../assets/service2.png";
import brand3 from "../../../assets/service3.png";
import brand4 from "../../../assets/service4.png";
import brand5 from "../../../assets/service5.png";
import brand6 from "../../../assets/service6.png";

const Brands = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="ptpx20 pbpx20 bg-ec">
      <div className="container mx-auto">
        <Swiper
          grabCursor={true}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1536: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="">
              <img
                src={brand1}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand2}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand3}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand4}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand5}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand6}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
