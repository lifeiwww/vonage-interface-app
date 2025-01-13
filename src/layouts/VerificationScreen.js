import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Verification from "../components/Verification";
import "../style.css";

const VerificationScreen = ({ onComplete }) => {
  return (
    <div className="verification-screen">
      <div className="verification-container">
        <Header
          title="Verifying Information..."
          subtitle="Please wait while we verify your phone number. This will only take a moment."
        />
        {/* Pass the callback to Verification */}
        <Verification onComplete={onComplete} />
        <Footer />
      </div>
    </div>
  );
};

export default VerificationScreen;
