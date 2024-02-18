import React from "react";
import FeatherIcon from "feather-icons-react";
import footer from "../../assets/logo.jpg"

const Footer = () => {
  return (
    <div className="w-full bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="flex sm-block items-center justify-between gap-12 container mx-auto">
        <div className="">
          <img src={footer} alt="footer" className="footerimg object-contain" />
        </div>
        <div className="flex items-center gap-12 mrpx12">
          <a
            href="https://www.instagram.com/kepalenterprise?igsh=MW4yNzc1M2hiMW82OQ%3D%3D&utm_source=qr"
            target="_blank"
          >
            <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
              <FeatherIcon icon="instagram" size="18" className="textwhite" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/people/Print-cartridge/100057804903576/?mibextid=2JQ9oc"
            target="_blank"
          >
            <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
              <FeatherIcon icon="facebook" size="18" className="textwhite" />
            </div>
          </a>
          <a href="https://www.indiamart.com/kepalenterprises/" target="_blank">
            <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
              <FeatherIcon icon="globe" size="18" className="textwhite" />
            </div>
          </a>
          <a href="mailto:Kepalmumbai@gmail.com">
            <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
              <FeatherIcon icon="mail" size="18" className="textwhite" />
            </div>
          </a>
        </div>
        <div className="sm-mtpx16">
          <div className="flex items-center gap-9">
            <p className="textwhite fsize14">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
