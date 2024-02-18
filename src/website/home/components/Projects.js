import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const Product = () => {
 const products = [
   {
     id: 1,
     img: "https://5.imimg.com/data5/SELLER/Default/2023/10/353687298/YA/CM/OP/34882840/printer-toner-250x250.jpg",
     name: "Toner Powder",
   },
   {
     id: 2,
     img: "https://3.imimg.com/data3/BD/PQ/GLADMIN-34658/opc-drum-250x250.jpg",
     name: "OPC Drum",
   },
   {
     id: 3,
     img: "https://4.imimg.com/data4/CB/KB/GLADMIN-184991/canon-toner-cartridges-250x250.jpg",
     name: "Canon Toner Cartridges",
   },
   {
     id: 4,
     img: "https://4.imimg.com/data4/JO/GJ/GLADMIN-184949/hp-toner-cartridges-250x250.jpg",
     name: "HP Toner Cartridges",
   },
   {
     id: 5,
     img: "https://5.imimg.com/data5/SELLER/Default/2023/4/300382771/RW/LK/HE/183802580/xerox-c7020-toner-cartridges-set-250x250.jpeg",
     name: "Xerox Toner",
   },
   {
     id: 6,
     img: "https://5.imimg.com/data5/SELLER/Default/2023/9/346421622/RH/JG/AR/34882840/xerox-5225-toner-cartridge-125x125.jpeg",
     name: "Xerox 5225 Toner Cartridge",
   },
   {
     id: 7,
     img: "https://3.imimg.com/data3/LP/EN/GLADMIN-80171/copier-spare-parts-250x250.jpg",
     name: "Copier Spare Parts",
   },
   {
     id: 8,
     img: "https://4.imimg.com/data4/WI/KG/GLADMIN-2/brother-toner-cartridges-250x250.jpg",
     name: "Brother Toner Cartridges",
   },
   {
     id: 9,
     img: "https://4.imimg.com/data4/AO/OX/GLADMIN-2/hp-black-ink-cartridge-250x250.png",
     name: "HP Black Ink Cartridge",
   },
   {
     id: 10,
     img: "https://4.imimg.com/data4/XT/KF/GLADMIN-185403/laser-toner-powder-250x250.jpg",
     name: "Laser Toner Powder",
   },
 ];
  return (
    <div className="bgwhite ptpx40 pbpx40 sm-ptpx20 sm-pbpx20" id="product">
      <div className="flex justify-center">
        <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35 sm-fsize23">
          Our Products
        </h4>
      </div>
      <div className="container mx-auto">
        <div className="mtpx25 sm-mtpx5">
          <div className="mtpx20">
            <Swiper
              grabCursor={true}
              loop
              className="mySwiper"
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
              {products.map((e) => (
                <SwiperSlide>
                  <div className="p10 bgwhite border-primary rounded-5">
                    <img
                      src={e.img}
                      alt="product"
                      className="product-img object-contain"
                    />
                    <div className="prpx12 plpx12 ptpx8 pbpx8 rounded-15">
                      <h5 className="textdark fsize18 font-600 mtpx1 mbpx1">
                        {e.name}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
