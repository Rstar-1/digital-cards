import React from "react";
import connect from "../../../assets/bed.png"

const ConnectEver = () => {

  return (
    <div className="bgsecondary connect-card">
      <div className="flex sm-block w-full">
        <div className="w-40 sm-w-full">
          <img
            src={connect}
            alt="info"
            className="connect-img object-cover w-full"
          />
        </div>
        <div className="w-60 sm-w-full">
          <div className="p40 sm-p20">
            <p className="textwhite font-500 sm-fsize14 fsize20">Kepal Enterprises</p>
            <h5 className="textwhite font-600 sm-font-400 fsize32 sm-fsize24 mtpx1 mbpx1">
              Connect with Us
            </h5>
            <p className="textwhite font-500 mtpx10 sm-mtpx6 sm-fsize13 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying
            </p>
            <div className="mtpx17 sm-mtpx10">
              <a href="tel:+91 9987825020">
                <button className="border-0 cursor-pointer font-500 textprimary rounded-5 sm-ptpx9 sm-pbpx9 sm-plpx20 sm-prpx20 ptpx12 pbpx12 plpx25 prpx25 fsize16 sm-fsize13 bgwhite">
                  Connect Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectEver;
