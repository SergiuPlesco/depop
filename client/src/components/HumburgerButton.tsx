import React from "react";

const HumburgerButton = () => {
  const handleMobileMenu = () => {
    console.log("mobile menu open");
  };
  return (
    <button
      onClick={() => {
        handleMobileMenu();
      }}
    >
      Menu
    </button>
  );
};

export default HumburgerButton;
