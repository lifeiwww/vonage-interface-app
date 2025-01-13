//Header component with title and subtitle
import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="main-content">
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
