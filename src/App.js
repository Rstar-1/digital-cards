import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/home/Home";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="App relative">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
      <div className="fixed bottom-0 right-0">
        <div
          className="bgprimary cursor-pointer up-box rounded-full flex justify-center items-center m10"
          onClick={scrollToTop}
        >
          <img
            src="https://i.imgur.com/MEcgvFc.png"
            alt="upimg"
            className="up-img"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
