import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

const NotReadyScreen = () => {
  const handleCallBack = () => {
    alert("Your request for a callback in 10 minutes has been submitted!");
  };

  const handleScanLater = () => {
    alert("You can scan the QR code again later at your convenience.");
  };

  return (
    <div className="not-ready-screen">
      <Header
        title="Need a different time?"
        subtitle="Let our AI communication agent know when to reach you"
      />

      <div className="not-ready-content">
        <button
          className="submit-button primary-button"
          onClick={handleCallBack}
        >
          Call Back in 10 Minutes
        </button>
        <button
          className="submit-button secondary-button"
          onClick={handleScanLater}
        >
          I’ll Scan QR Code Again Later
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default NotReadyScreen;
