// src/components/Popup/Popup.jsx
import { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;
    const isFreshVisit =
      (navType === "navigate" || navType === "reload" || performance.navigation.type === 1) &&
      !sessionStorage.getItem("hasSeenPopup");

    if (isFreshVisit) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 500);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={closePopup}>
          &times;
        </button>
        <img
          src="/images/dev-profile.jpg"
          alt="Developer"
          className="popup-avatar"
          loading="lazy"
        />
        <h3>Developed & Deployed by:</h3>
        <h2 className="popup-name">Payal Patil</h2>
        <p>
          Learned so much during this OJT! This app showcases my independent
          coding and deployment skills.
        </p>
        <button className="popup-button" onClick={closePopup}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Popup;
