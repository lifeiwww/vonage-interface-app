import React, { useState } from "react";
import EnterNumber from "./layouts/EnterNumber";
import VerificationScreen from "./layouts/VerificationScreen";
import ConfirmCall from "./layouts/ConfirmCall";
import NotReadyScreen from "./layouts/NotReadyScreen";

function App() {
  const [screen, setScreen] = useState("EnterNumber");

  // Navigate to Verification Screen after submitting the phone number
  const handleEnterNumberSubmit = () => {
    setScreen("Verification");
  };

  // Navigate to Confirm Call Screen after verification is complete
  const handleVerificationComplete = () => {
    setScreen("ConfirmCall");
  };

  // Navigate to Not Ready Screen when user clicks "Not Ready for Call"
  const handleNotReady = () => {
    setScreen("NotReady");
  };

  return (
    <div>
      {screen === "EnterNumber" && (
        <EnterNumber onSubmit={handleEnterNumberSubmit} />
      )}
      {screen === "Verification" && (
        <VerificationScreen onComplete={handleVerificationComplete} />
      )}
      {screen === "ConfirmCall" && (
        <ConfirmCall onRedirect={handleNotReady} />
      )}
      {screen === "NotReady" && <NotReadyScreen />}
    </div>
  );
}

export default App;
