import Nav from "./components/Nav";
import ContactBar from "./components/ContactBar";
import Home from "./components/Home";
import "./App.scss";
import ScrollSpy from "react-ui-scrollspy";

function App() {
  return (
    <>
      <Nav />
      <ContactBar />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Home />
      </ScrollSpy>
    </>
  );
}

export default App;
