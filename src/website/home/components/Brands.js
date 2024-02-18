import React from "react";
import Fade from "react-reveal/Fade";
import count from "../../../assets/banner.jpg";

const Brands = () => {
  return (
    <div className="relative count-img">
      <img
        src={count}
        alt="count"
        className="w-full filter-b5 count-img object-cover"
      />
      <div className="absolute top-0 text-center left-0 flex items-center justify-center count-img">
        <div className="w-80 sm-w-90">
          <Fade bottom cascade>
            <div className="grid-cols-4 sm-grid-cols-2 gap-12">
              <div className="text-center">
                <h2 className="textwhite font-600 mbpx1 fsize40 sm-fsize20">
                  1200 +
                </h2>
                <p className="textwhite font-500 sm-font-400 mtpx9 leading mbpx1 fsize25 sm-fsize14">
                  Active Customer
                </p>
              </div>
              <div className="text-center">
                <h2 className="textwhite font-600 mbpx1 fsize40 sm-fsize20">
                  1200 +
                </h2>
                <p className="textwhite font-500 sm-font-400 mtpx9 leading mbpx1 fsize25 sm-fsize14">
                  Specialist Staff
                </p>
              </div>
              <div className="text-center">
                <h2 className="textwhite font-600 mbpx1 fsize40 sm-fsize20">
                  1200 +
                </h2>
                <p className="textwhite font-500 sm-font-400 mtpx9 leading mbpx1 fsize25 sm-fsize14">
                  Ongoing Project
                </p>
              </div>
              <div className="text-center">
                <h2 className="textwhite font-600 mbpx1 fsize40 sm-fsize20">
                  1200 +
                </h2>
                <p className="textwhite font-500 sm-font-400 mtpx9 leading mbpx1 fsize25 sm-fsize14">
                  Completed Project
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Brands;
