import React from "react";
import Fade from "react-reveal/Fade";
import banner from "../../../assets/banner.jpg";

const Banner = () => {

  return (
    <div className="relative banner-img">
      <img
        src={banner}
        alt="banner"
        className="w-full filter-b6 banner-img object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start banner-img">
        <div className="w-70 sm-w-full text-center container mx-auto">
          <Fade bottom cascade>
            <div>
              <p className="textwhite font-400 text-center mbpx1 fsize16 sm-fsize14">
                Dealers in all Types
              </p>
              <h3 className="textwhite font-600 sm-font-400 mtpx1 sm-mtpx6 leading mbpx1 fsize40 sm-fsize25">
                Kepal Enterprises
              </h3>
              <p className="textwhite font-400 text-center mtpx8 mbpx1 fsize20 sm-fsize15">
                Contact Person: Pravin Chamariya shop no 2 ,bhrasadiya park,
                40/42 Modi Street Mumbai - 400001, Maharashtra, India
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
