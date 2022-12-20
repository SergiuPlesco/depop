import React from "react";
import HamburgerIcon from "../../../assets/HamburgerIcon";
type HamburgerButtonProps = {
  handleMobileMenu: () => void;
};
const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  handleMobileMenu,
}) => {
  return (
    <button
      onClick={() => {
        handleMobileMenu();
      }}
    >
      <HamburgerIcon />
    </button>
  );
};

export default HamburgerButton;
