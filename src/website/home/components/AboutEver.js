import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../../assets/about2.png";

const AboutEver = () => {
  return (
    <div
      className="bgwhite ptpx60 pbpx60 sm-ptpx20 relative sm-pbpx20"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex sm-block items-center w-full">
          <div className="w-50 sm-w-full prpx40 sm-prpx1">
            <img
              src={about}
              alt="about1"
              className="about1-img object-cover"
            />
          </div>
          <div className="w-50 sm-mtpx16 sm-w-full">
            <Fade bottom>
              <h2 className="textprimary font-600 mtpx20 mbpx1 sm-fsize20 fsize35">
                About Us
              </h2>
              <div className="flex mtpx20">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path
                      d="M22 0.5V24.5H0L22 0.5Z"
                      fill="#002147"
                      fill-opacity="0.53"
                    />
                  </svg>
                </div>
                <div className="bgprimary w-full ptpx10 pbpx10">
                  <div className="p19 sm-p10">
                    <p className="fsize17 sm-fsize15 textwhite font-500">
                      Established in the year 2017 at Mumbai, (Maharashtra,
                      India) , we “Kepal Enterprises” are engaged in
                      manufacturing, trading and wholesaling a wide range of
                      Toner Cartridge, Refill Ink Set, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mtpx20">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path d="M22 0.5V24.5H0L22 0.5Z" fill="#E3E3E3" />
                  </svg>
                </div>
                <div className="bg-ec w-full ptpx10 pbpx10">
                  <div className="p19 sm-p10">
                    <p className="fsize17 sm-fsize15 textforth font-500">
                      {" "}
                      Under the expert supervision of our mentor “Pravin
                      Chamariya(Director)” , we have attained an immense
                      position in the industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mtpx20">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path d="M22 0.5V24.5H0L22 0.5Z" fill="#E3E3E3" />
                  </svg>
                </div>
                <div className="bg-ec w-full ptpx10 pbpx10">
                  <div className="p19 sm-p10">
                    <p className="fsize17 sm-fsize15 textforth font-500">
                      {" "}
                      Under the expert supervision of our mentor “Pravin
                      Chamariya(Director)” , we have attained an immense
                      position in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEver;
