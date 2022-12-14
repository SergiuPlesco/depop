import { useState } from "react";
import styled, { css } from "styled-components";
import CloseIcon from "../../../assets/close.png";
import useScreenSize from "../../../hooks/useScreenSize";
import HamburgerButton from "../../HamburgerButton";
import SocialActions from "../SocialActions";

const MobileNavigation = () => {
  const { isMobile } = useScreenSize();
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuVisible(true);
  };
  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };
  return (
    <>
      {isMobile && <HamburgerButton handleMobileMenu={handleMobileMenu} />}

      <MobileNavigationContainer visible={isMobileMenuVisible}>
        <div className="flex justify-between">
          <SocialActions />

          <button onClick={closeMobileMenu}>
            <img src={CloseIcon} width={18} height={18} alt="" />
          </button>
        </div>
      </MobileNavigationContainer>
    </>
  );
};

export default MobileNavigation;

type ContainerProps = {
  visible?: boolean;
};

const MobileNavigationContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  z-index: 2;
  padding: 1.5rem;
  box-shadow: 10px 0px 25px rgba(0, 0, 0, 0.1);
  transition: transform 250ms ease-in-out;
  ${(props) =>
    props.visible
      ? css`
          visibility: visible;
          transform: translateX(0);
        `
      : css`
          visibility: hidden;
          transform: translateX(-100%);
        `}
`;
