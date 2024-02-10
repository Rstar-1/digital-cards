import React from "react";
import Fade from "react-reveal/Fade";
import service from "../../../assets/new.png";
import service2 from "../../../assets/new2.png";
import service3 from "../../../assets/new3.png";

const Service = () => {

  return (
    <div className="bg-fa ptpx40 pbpx60" id="service">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35 sm-fsize23">
            Services
          </h4>
        </div>
        <div className="grid-cols-3 sm-grid-cols-1 items-start mtpx30 sm-mtpx20 gap-12">
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <img src={service} className="service-img" alt="service1" />
              <h5 className="textdark font-600 sm-font-400 sm-fsize20 mtpx15 mbpx1 fsize25">
                Lorem
              </h5>
              <p className="textgray font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate or a typeface without relying
                on meaningful content.
              </p>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <img src={service2} className="service-img" alt="service2" />
              <h5 className="textdark font-600 sm-font-400 sm-fsize20 mtpx15 mbpx1 fsize25">
                Lorem
              </h5>
              <p className="textgray font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate or a typeface without relying
                on meaningful content.
              </p>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <img src={service3} className="service-img" alt="service3" />
              <h5 className="textdark font-600 sm-font-400 sm-fsize20 mtpx15 mbpx1 fsize25">
                Lorem
              </h5>
              <p className="textgray font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate or a typeface without relying
                on meaningful content.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Service;
