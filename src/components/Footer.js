//Footer component with SAP Logo & Terms 

import React from "react";
import sapLogo from "../assets/images/SAP_Logo.png"; // path to the logo

const Footer = () => {
  return (
    <footer className="footer">
      <img className="sap-logo" src={sapLogo} alt="SAP Logo" />
      <p className="terms">
        View our <a href="https://www.sap.com/index.html">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
