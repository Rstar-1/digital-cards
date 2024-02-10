import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      scroll: "home",
    },
    {
      icon: "user",
      name: "About Us",
      scroll: "about",
    },
    {
      icon: "grid",
      name: "Gallery",
      scroll: "gallery",
    },
    {
      icon: "shopping-cart",
      name: "Products",
      scroll: "product",
    },
    {
      icon: "settings",
      name: "Service",
      scroll: "service",
    },
  ];

  return (
    <div className="w-full ptpx4 pbpx4 bgwhite sm-ptpx1 sm-pbpx1">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 sm-block w-full z-99">
          <div className="bgwhite w-90 h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  RS Developers
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <div className="mtpx20">
              {NavMenu.map((e) => (
                <>
                  <div className="plpx20 prpx20 mbpx25">
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="fsize14 flex items-center gap-9 activetext  cursor-pointer"
                      to={e.scroll}
                    >
                      <FeatherIcon icon={e.icon} className="flex" size={16} />
                      <p className="mtpx2" onClick={() => setsidebarshow(false)}>
                        {e.name}
                      </p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center container mx-auto">
        <div className="">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </NavLink>
        </div>
        <div className="flex justify-center gap-5 items-center sm-hidden">
          {NavMenu.map((e) => (
            <>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="fsize14 activetext mlpx28 cursor-pointer"
                to={e.scroll}
              >
                {e.name}
              </Link>
            </>
          ))}
        </div>
        <div className="hidden sm-block">
          <div className="bg-ec sidebar-icon rounded-5 justify-center items-center flex">
            <FeatherIcon
              icon="align-justify"
              className="textgray"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
