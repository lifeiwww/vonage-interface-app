import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";
import "../style.css";

const EnterNumber = ({ onSubmit }) => {
  return (
    <div className="enter-number">
      <div className="enter-number-container">
        <Header
          title="Before connecting you with the SAP Oratio AI Agent"
          subtitle="Please enter your phone number. We'll verify and connect you with our agent right away."
        />
        {/* Pass the callback to InputForm */}
        <InputForm onSubmit={onSubmit} />
        <Footer />
      </div>
    </div>
  );
};

export default EnterNumber;
