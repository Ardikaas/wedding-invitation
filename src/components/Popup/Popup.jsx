import React, { useEffect, useState } from "react";
import "./Popup.style.css"; // Import CSS untuk styling

const Popup = ({ onComplete, audioRef }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Setelah 15 detik, tampilkan tombol "Buka Undangan"
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 8000); // 15 detik

    // Cleanup timer jika komponen unmount
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    // Memulai fadding ketika tombol diklik
    setFadeOut(true);
    setTimeout(() => {
      onComplete(); // Memanggil callback saat fadding selesai
    }, 500); // Durasi fadding

    // Memulai musik
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay gagal:", error);
      });
    }
  };

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader"></div>
      {showButton && (
        <button className="open-invitation-btn" onClick={handleButtonClick}>
          Buka Undangan
        </button>
      )}
      <p>Loading...</p>
    </div>
  );
};

export default Popup;
