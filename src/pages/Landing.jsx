import { useEffect, useRef } from "react";
import About from "../components/About/About";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import backgroundMusic from "../components/assets/song.mp3";

const Landing = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    document.title = "Undangan Pernikahan | Nova & Rizki";

    // Simpan referensi audioRef.current ke variabel lokal
    const audioElement = audioRef.current;

    const handleUserInteraction = () => {
      if (audioElement && audioElement.paused) {
        audioElement.play().catch((error) => {
          console.log("Autoplay gagal:", error);
        });
      }
    };

    // Tambahkan event listener untuk berbagai jenis interaksi pengguna
    window.addEventListener("mousedown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("mousedown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);

      // Gunakan referensi lokal untuk memastikan konsistensi
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset posisi audio
      }
    };
  }, []);

  return (
    <div>
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
