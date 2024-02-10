import React from "react";
import Fade from "react-reveal/Fade";
import home from "../../../assets/bed.png"

const Banner = () => {

  return (
    <div className="ptpx80 pbpx80 sm-ptpx25 sm-pbpx25 bgwhite flex items-center">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full">
            <Fade left cascade>
              <p className="textdark font-600 sm-font-400 text-left sm-text-justify mbpx1 fsize25 sm-fsize16">
                Dealers in all Types
              </p>
              <h3 className="textprimary font-600 sm-font-400 mtpx9 leading mbpx1 fsize50 sm-fsize24">
                Kepal
                <span className="mlpx5 textsecondary">Enterprises</span>
              </h3>
              <p className="textgray font-500 sm-font-400  mtpx13 sm-fsize13 text-left mbpx1 fsize16">
                We “Penite Solutions Private Limited” are engaged in
                manufacturing, trading and wholesaling a wide range of Toner
                Cartridge, Refill Ink Set, etc.
              </p>

              <div className="flex items-center gap-10">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 bgprimary">
                  Connect
                </button>
                <button className="cursor-pointer font-500 rounded-5 ptpx12 pbpx12 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 primarybtn">
                  About Us
                </button>
              </div>
            </Fade>
          </div>
          <div className="w-50 sm-w-full sm-mtpx50">
            <img
              src={home}
              alt="banner"
              className="banner-img object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
