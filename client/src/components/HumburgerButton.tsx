import React from "react";
type HamburgerButtonProps = {
  handleMobileMenu: () => void;
};
const HumburgerButton: React.FC<HamburgerButtonProps> = ({
  handleMobileMenu,
}) => {
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
