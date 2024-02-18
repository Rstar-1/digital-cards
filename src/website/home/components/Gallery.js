import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import ReactStars from "react-rating-stars-component";

const Testimonial = () => {
  const Testimonials = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329446682/TS/CA/SB/21925577/304-stainless-steel-pipe-250x250.jpg",
      alphabate: "A",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/KW/HY/MY-21925577/ss-pipe-250x250.jpg",
      alphabate: "A",
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329446682/TS/CA/SB/21925577/304-stainless-steel-pipe-250x250.jpg",
      alphabate: "A",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/KW/HY/MY-21925577/ss-pipe-250x250.jpg",
      alphabate: "A",
    },
  ];
  return (
    <div className="bg-white ptpx60 pbpx60 sm-ptpx20 sm-pbpx20" id="product">
      <div className="container mx-auto">
        <h4 className="textforth font-600 mtpx1 mbpx1 fsize35 sm-fsize18">
          Testimonials
        </h4>
        <Swiper
          grabCursor={true}
          loop
          className="mySwiper mtpx30 sm-mtpx15"
          breakpoints={{
            1536: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            325: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
          }}
        >
          {Testimonials.map((e) => (
            <SwiperSlide>
              <div className="bg-fa p20 rounded-10">
                <div className="bg-ec circle-img rounded-full flex items-center justify-center">
                  <p className="fsize16 textforth font-600">{e.alphabate}</p>
                </div>
                <ReactStars count={5} size={24} value={5} color2={"#ffd700"} />
                <h6 className="fsize22 sm-fsize17 textforth mtpx10 mbpx1">
                  Name
                </h6>
                <p className="fsize16 sm-fsize13 textgray mtpx3">
                  In publishing and graphic design, Lorem ipsum is a
                </p>
                <div className="mtpx10 flex justify-end">
                  <p className="fsize14 sm-fsize13 textgray mtpx3">
                    31-August-20
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
