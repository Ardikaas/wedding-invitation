import insta from "../assets/instagram-brands-solid.svg";
import email from "../assets/envelope-solid.svg";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h4>Web Invitation Created by : Ardikaas</h4>
      <div className="footer-icon">
        <a
          href="https://www.instagram.com/ardikaas_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="" />
        </a>
        <a
          href="mailto: ardikaasbusiness@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
