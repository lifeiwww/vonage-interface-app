import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallConfirmation from "../components/CallConfirmation";
import "../style.css";

const ConfirmCall = ({ onRedirect, phoneNumber }) => {
  const [countdown, setCountdown] = useState(5);

  const backendUrl = process.env.NODE_ENV === "production"
    ? "https://grossly-trusting-lionfish.ngrok-free.app"
    : "http://localhost:3000";

  useEffect(() => {
    if (!phoneNumber) {
      console.error("Phone number is missing.");
      alert("Phone number is missing. Cannot place the call.");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      initiateCall();
    }

    return () => clearInterval(timer);
  }, [countdown, phoneNumber]);

  const initiateCall = () => {
    const sanitizedNumber = phoneNumber.replace(/\D/g, "");

    fetch(`${backendUrl}/call?callee=${sanitizedNumber}`)
      .then((response) => response.text())
      .then((result) => {
        console.log("Server response:", result);
        alert("Call requested. Check your phone soon!");
      })
      .catch((err) => {
        console.error("Error making call request:", err);
        alert("Failed to place call. Check console.");
      });
  };

  const handleNotReady = () => {
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
            AI communication agent will call you in {countdown} second{countdown !== 1 ? "s" : ""}.
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
