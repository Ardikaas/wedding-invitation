import nama from "../assets/nama.png";
import frame from "../assets/frame.png";
import flower from "../assets/flower2.png";
import "./Home.style.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Home = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef(null);
  const startTimer = () => {
    const countdownDate = new Date("August 24, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="flower">
        <img className="flower-kiri" src={flower} alt="" />
        <img className="flower-kanan" src={flower} alt="" />
      </div>
      <div className="home">
        <div className="text">
          <h1>UNDANGAN PERNIKAHAN</h1>
          <h3>Kepada Bapak/ibu/saudara/i</h3>
          <h4>Tanpa mengurangi rasa hormat, kami mengundang</h4>
          <h4>anda untuk hadir di acara pernikahan kami</h4>
        </div>
        <div className="tengah">
          <img className="nama" src={nama} alt="" />
          <img className="frame" src={frame} alt="" />
        </div>
        <div className="tanggal">
          <div className="tanggal-text">
            <h3>AGUSTUS</h3>
            <h2>24</h2>
            <h3>2024</h3>
          </div>
          <div className="countdown">
            <div className="countdown-frame">
              <h3>{timerDays}</h3>
              <h6>Hari</h6>
            </div>
            <h2>:</h2>
            <div className="countdown-frame">
              <h3>{timerHours}</h3>
              <h6>Jam</h6>
            </div>
            <h2>:</h2>
            <div className="countdown-frame">
              <h3>{timerMinutes}</h3>
              <h6>Menit</h6>
            </div>
            <h2>:</h2>
            <div className="countdown-frame">
              <h3>{timerSeconds}</h3>
              <h6>Detik</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
