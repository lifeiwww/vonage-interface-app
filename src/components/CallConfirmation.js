//Component For Call Confirmation Notification Screen 
import React from "react";
import PostItIcon from "../assets/images/post-it-XS.png";
import "../style.css";

const CallConfirmation = ({ onRedirect }) => {
  return (
    <div className="call-confirmation">
      <div className="info-card">
        <img className="info-icon" src={PostItIcon} alt="Post-it Icon" />
        <div className="info-text">
          <strong>While you wait:</strong>
          <ul>
            <li>- Unmute your phone</li>
            <li>- Stay on this page</li>
            <li>- Remain in a safe spot</li>
            <li>- Have vehicle details ready</li>
          </ul>
        </div>
      </div>

      {/* Not Ready for Call Section */}
      <p
        className="not-ready-link"
        onClick={onRedirect} // Use the correct prop name
        role="button"
        tabIndex="0"
      >
        Not Ready for Call
      </p>
    </div>
  );
};

export default CallConfirmation;
