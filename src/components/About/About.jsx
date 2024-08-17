import fpce from "../assets/shoe.png";
import namace from "../assets/namanv.png";
import fpco from "../assets/shoe2.png";
import namaco from "../assets/namarr.png";
import ring from "../assets/ring.png";
import bismil from "../assets/bismil.png";
import "./About.style.css";

const About = ({ onImageLoad }) => {
  return (
    <div className="about-container">
      <div className="about">
        <img
          className="about-bismil"
          src={bismil}
          alt=""
          onLoad={onImageLoad}
        />
        <h4 className="dif-te-top">
          Dengan memohon Rahmat dan Ridho Allah Subhanahu Wata'ala kami
          bermaksud melangsungkan pernikahan putra putri kami :
        </h4>
        <img className="about-fp" src={fpce} alt="" onLoad={onImageLoad} />
        <img
          className="about-name-ce"
          src={namace}
          alt=""
          onLoad={onImageLoad}
        />
        <h4>Putri pertama dari :</h4>
        <h4>Bapak Hermansyah & Ibu Wiwik</h4>
        <img className="about-ring" src={ring} alt="" onLoad={onImageLoad} />
        <img className="about-fp" src={fpco} alt="" onLoad={onImageLoad} />
        <img
          className="about-name-co"
          src={namaco}
          alt=""
          onLoad={onImageLoad}
        />
        <h4>Putra pertama dari :</h4>
        <h4>Bapak Saefulloh & Ibu Siti Sami</h4>
        <h4 className="dif-te-bot">
          "Dan diantara tanda-tanda (Kebesaran) Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa
          kasih sayang. Sungguh, pada demikian itu benar-benar terdapat
          tanda-tanda (Kebesaran Allah) bagi kaum yang berfikir"
        </h4>
        <h3>QS. Ar-Ruum : 21</h3>
      </div>
    </div>
  );
};

export default About;
