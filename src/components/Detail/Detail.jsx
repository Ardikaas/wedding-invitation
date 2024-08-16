import nama from "../assets/akhir.png";
import "./Detail.style.css";

const Detail = () => {
  return (
    <div className="detail-container">
      <div className="detail">
        <h4>AKAD NIKAH</h4>
        <div className="detail-date">
          <h4>AGUSTUS</h4>
          <div className="detail-date-down">
            <h4>Sabtu</h4>
            <h4>24</h4>
          </div>
          <h3>2024</h3>
        </div>
        <h6 className="pukul">Pukul : 08.00 - Selesai</h6>
        <h4>RESEPSI</h4>
        <div className="detail-date">
          <h4>AGUSTUS</h4>
          <div className="detail-date-down">
            <h4>Sabtu</h4>
            <h4>24</h4>
          </div>
          <h3>2024</h3>
        </div>
        <h4 className="lokasi">LOKASI</h4>
        <a
          href="https://maps.app.goo.gl/UTmWYsxVfwcYFpnt9"
          rel="noreferrer"
          target="_blank"
        >
          <h6>Jl. Buyut Lurah 2</h6>
          <h6>https://maps.app.goo.gl/UTmWYsxVfwcYFpnt9</h6>
        </a>
      </div>
      <div className="detail-foot">
        <h4>HORMAT KAMI</h4>
        <img src={nama} alt="" />
      </div>
    </div>
  );
};

export default Detail;
