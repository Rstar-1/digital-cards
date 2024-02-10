import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../../assets/rock.png";

const AboutEver = () => {

  return (
    <div className="bgwhite ptpx40 pbpx40 sm-ptpx20 sm-pbpx20" id="about">
      <div className="container mx-auto">
        <div className="flex sm-block w-full mtpx35 gap-12">
          <div className="w-30 sm-w-full prpx40 sm-prpx1">
            <img
              src={about}
              alt="about1"
              className="about1-img object-contain"
            />
          </div>
          <div className="w-70 sm-w-full">
            <Fade right cascade>
              <h2 className="textprimary font-600 mtpx20 mbpx1 sm-fsize20 fsize35">
                About
                <span className="textdark mlpx5">Us</span>
              </h2>
              <p className="textgray font-500 mtpx13 text-left mbpx1 fsize16 sm-fsize13">
                Established in the year
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">2017</span> at
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">
                  Mumbai, (Maharashtra, India)
                </span>
                , we
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">“Kepal Enterprises”</span>
                are engaged in
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">
                  manufacturing, trading
                </span>
                and <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">wholesaling</span> a
                wide range of
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">
                  Toner Cartridge, Refill Ink Set,
                </span>
                etc. Under the expert supervision of our
                <span className="textdark font-600 mlpx5 mrpx5 sm-mlpx2 sm-mrpx2">
                  mentor “Pravin Chamariya(Director)”
                </span>,
                we have attained an immense position in the industry.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEver;
