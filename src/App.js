import Nav from "./components/Nav";
import ContactBar from "./components/ContactBar";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import "./App.scss";
import "./general.scss";
import ScrollSpy from "react-ui-scrollspy";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 920);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {isMobile ? <MobileNav /> : <Nav />}
      <ScrollSpy offsetBottom={50}  scrollThrottle={100} >
        <Home />
        <About />
      </ScrollSpy>
      <ContactBar />
    </>
  );
}

export default App;
