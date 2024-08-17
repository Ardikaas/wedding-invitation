import { useRef, useState } from "react";
import About from "../components/About/About";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import backgroundMusic from "../components/assets/song.mp3";
import Popup from "../components/Popup/Popup";

const Landing = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const audioRef = useRef(null);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div>
      {showPreloader && (
        <Popup onComplete={handlePreloaderComplete} audioRef={audioRef} />
      )}
      <Home />
      <About />
      <Detail />
      <Footer />

      <audio ref={audioRef} src={backgroundMusic} preload="auto" loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Landing;
