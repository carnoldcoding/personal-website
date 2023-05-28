import Nav from "./components/Nav";
import ContactBar from "./components/ContactBar";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import "./App.scss";
import ScrollSpy from "react-ui-scrollspy";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
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
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Home />
      </ScrollSpy>
      <ContactBar />
    </>
  );
}

export default App;
