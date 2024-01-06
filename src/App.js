import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Traits from "./components/Traits";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import {experience1} from "./components/Experience/data.js"
import "./App.scss";
import "./general.scss";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  const [Loading, setLoading] = useState(true);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 920);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3100);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          {isMobile ? <MobileNav /> : <Nav />}
          <Home />
          <About />
          <Traits />
          <Experience {...experience1}/>
          <Portfolio />
          <Contact />
          {isMobile ? <MobileFooter /> : <Footer />}
        </>
      )}
    </>
  );
}

export default App;
