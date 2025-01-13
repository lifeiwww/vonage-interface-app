// Component of Phone Number Input Field with Agreement Details and Links
import React, { useState } from "react";
import { CheckBox, Button } from "@ui5/webcomponents-react";
import "../style.css";

const InputForm = ({ onSubmit }) => {
  // State for phone number input
  const [phoneNumber, setPhoneNumber] = useState("");

  // State for agreement checkbox
  const [agreed, setAgreed] = useState(false);

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to validate phone number and trigger submit
  const handleSubmit = () => {
    // Remove non-digit characters and check if phone number is at least 10 digits
    if (phoneNumber.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid phone number."); // Show error if invalid
      return;
    }
    setErrorMessage(""); // Clear error message if valid

    // Trigger the onSubmit callback with phone number and agreement status
    onSubmit(phoneNumber, agreed);
  };

  return (
    <div className="controls">
      {/* Phone Number Input Section */}
      <div className="input-section">
        <label className="label">Phone Number *</label>
        <input
          className="input"
          placeholder="(123)-456-7890"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value); // Update phone number state
            if (e.target.value.replace(/\D/g, "").length >= 10) {
              setErrorMessage(""); // Clear error message when input becomes valid
            }
          }}
        />
        {/* Error Message for Invalid Phone Number */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      {/* Agreement Checkbox Section */}
      <div className="legal">
        <CheckBox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)} // Update agreement state
        />
        <span className="checkBox-text">
          I agree to the{" "}
          <a
            href="https://www.sap.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            End User License Agreement
          </a>{" "}
          and{" "}
          <a
            href="https://www.sap.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Privacy Policy
          </a>
        </span>
      </div>

      {/* Submit Button */}
      <Button
        className="submit-button"
        design="Emphasized"
        onClick={handleSubmit}
        // Disable button if phone number is empty, invalid, or agreement is not checked
        disabled={phoneNumber.replace(/\D/g, "").length < 10 || !agreed}
      >
        Get Support
      </Button>
    </div>
  );
};

export default InputForm;
