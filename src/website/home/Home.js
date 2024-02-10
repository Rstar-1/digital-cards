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

const Home = () => {

  return (
    <div>
      <Marque />
      <Banner />
      <Brands />
      <AboutEver />
      <Projects />
      <Gallery />
      <Service />
      <ConnectEver />
    </div>
  );
};

export default Home;
