import nama from "../assets/nama.png";
import frame from "../assets/frame.png";
import flower from "../assets/flower2.png";
import "./Home.style.css";

const Home = () => {
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
          <h3>AGUSTUS</h3>
          <h2>24</h2>
          <h3>2024</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
