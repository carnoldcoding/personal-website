import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.scss";
import "./general.scss";
import ScrollSpy from "react-ui-scrollspy";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [Loading, setLoading] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 920);
  };

  useEffect(() => {
      setTimeout(()=>{
          setLoading(false);
      }, 4000)
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
          <ScrollSpy
            activeClass="active"
            offsetTop={10}
            offsetBottom={100}
            scrollThrottle={100}
          >
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </ScrollSpy>
          {isMobile ? <MobileFooter /> : <Footer />}
        </>
      )}
    </>
  );
}

export default App;
