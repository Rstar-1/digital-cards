import React from "react";

const ConnectEver = () => {

  return (
    <div className="ptpx40 pbpx20 sm-ptpx20 sm-pbpx1 bgforth">
      <div className="container mx-auto">
        <div className="bgprimary rounded-10 w-full">
          <div className="p35 sm-p20 flex sm-block items-center">
            <div className="w-80 sm-w-full">
              <h6 className="textwhite font-600 mtpx1 mbpx1 fsize25 sm-fsize20">
                Kepal Enterprises
              </h6>
              <p className="textwhite font-500 text-left sm-text-justify mbpx1 fsize15 sm-fsize13">
                Connect with us, and let your voice be heard!
              </p>
            </div>
            <div className="w-20 sm-w-full sm-mtpx10 flex sm-block justify-end">
              <a href="tel:+91 8048967609">
                <button className="border-0 cursor-pointer font-500 textprimary rounded-5 sm-ptpx9 sm-pbpx9 sm-plpx20 sm-prpx20 ptpx12 pbpx12 plpx25 prpx25 fsize16 sm-fsize13 bgwhite">
                  +91 8048967609
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
