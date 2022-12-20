import { useState } from "react";
import styled, { css } from "styled-components";
import Xmark from "../../../assets/Xmark";
import useScreenSize from "../../../hooks/useScreenSize";
import HamburgerButton from "../../HamburgerButton";
import SocialActions from "../SocialActions";
import CountryLanguageSelect from "./CountryLanguageSelect";
import MainNavigation from "./MainNavigation";
import ProfileNavigation from "./ProfileNavigation";
import SupportNavigation from "./SupportNavigation";

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

      <MobileNavigationContainer visible={isMobileMenuVisible && isMobile}>
        <div className="flex justify-between">
          <SocialActions />

          <button onClick={closeMobileMenu}>
            <Xmark />
          </button>
        </div>
        <ProfileNavigation />
        <MainNavigation closeMobileMenu={closeMobileMenu} />
        <SupportNavigation />
        <CountryLanguageSelect />
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
  transition: transform 250ms ease-in-out 0s;
  overflow-y: auto;
  ${(props) =>
    props.visible
      ? css`
          transform: translateX(0);
          box-shadow: 10px 0px 25px rgba(0, 0, 0, 0.1);
        `
      : css`
          transform: translateX(-100%);
        `}
`;
