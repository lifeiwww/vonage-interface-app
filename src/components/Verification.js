import React, { useState, useEffect } from "react";
import "../style.css";
import VonageLogo from "../assets/images/VonagePOE.png"; // Vonage logo for notification section
import CompleteIcon from "../assets/images/complete.svg"; // Complete icon for loading completion

/**
 * Verification Component
 * Handles the loading progress display and transitions to completion.
 * Can be integrated with a future API for dynamic progress updates.
 *
 * @param {Function} onComplete - Callback function triggered after loading is complete.
 */
const Verification = ({ onComplete }) => {
  // State to track the progress of the loader (0-100%)
  const [progress, setProgress] = useState(0);

  // State to track if the loading process is complete
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulated progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Clear interval when progress reaches 100%
          setLoadingComplete(true); // Set loadingComplete to true
          setTimeout(() => {
            onComplete(); // Trigger onComplete callback after a delay
          }, 2000); // 2-second delay for displaying completion state
        }
        return prev + 2; // Increment progress by 2% per interval
      });
    }, 60); // Interval duration: 60ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [onComplete]);

  return (
    <div className="verification">
      {/* Loading Area */}
      <div className="loading-area">
        {loadingComplete ? (
          // Display the completion icon when loading is complete
          <div className="complete-icon">
            <img
              src={CompleteIcon} // Path to the completion icon
              alt="Complete"
              className="complete-icon-img"
            />
          </div>
        ) : (
          // Circular progress bar for loading state
          <div className="progress-circle">
            <svg className="circle" viewBox="0 0 36 36">
              {/* Background Circle */}
              <path
                className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress Circle */}
              <path
                className="circle-progress"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{
                  strokeDasharray: `${progress}, 100`, // Update progress dynamically
                }}
              />
            </svg>
            {/* Display progress percentage */}
            <div className="progress-text">{`${Math.round(progress)}%`}</div>
          </div>
        )}
      </div>

      {/* Vonage Icon Display */}
      <div className="vonage-section">
        <div className="notification">
          <img
            src={VonageLogo} // Path to the Vonage logo
            alt="Vonage Logo"
            className="vonage-logo"
          />
          <span className="notification-text">
            {loadingComplete
              ? "Authenticated through Number Verification API"
              : "Authenticating through Number Verification API"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Verification;
