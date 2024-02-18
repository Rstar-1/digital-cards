import React from "react";
// Pages
import Marque from "./components/Marque";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import AboutEver from "./components/AboutEver";
import Projects from "./components/Projects";
import Service from "./components/Service";
import ConnectEver from "./components/ConnectEver";
import Information from "./components/Information";

const Home = () => {

  return (
    <div>
      <Marque />
      <Banner />
      <AboutEver />
      <Projects />
      <Information />
      <Gallery />
      <ConnectEver />
      <Service />
      <Brands />
    </div>
  );
};

export default Home;
