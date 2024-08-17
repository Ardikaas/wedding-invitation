import { useEffect } from "react";
import About from "../components/About/About";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Landing = () => {
  useEffect(() => {
    document.title = "Undanga Pernikahan | Nova & Rizki";
  }, []);
  return (
    <div>
      <Home />
      <About />
      <Detail />
      <Footer />
    </div>
  );
};

export default Landing;
