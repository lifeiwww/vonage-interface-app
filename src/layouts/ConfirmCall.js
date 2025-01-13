import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallConfirmation from "../components/CallConfirmation";
import "../style.css";

const ConfirmCall = ({ onRedirect }) => {
  const handleNotReady = () => {
    // Handle the "Not Ready for Call" redirection
    if (onRedirect) {
      onRedirect();
    }
  };

  return (
    <div className="confirm-call-screen">
      <Header
        title="Ready to Connect"
        subtitle={
          <>
          Your phone number has been verified.
          <br />
          Our support team will call you shortly when you're ready.
          </>
        }
      />
      <div className="confirmation-content">
        <CallConfirmation onRedirect={handleNotReady} />
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmCall;
