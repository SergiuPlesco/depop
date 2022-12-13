import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Login";
import Logo from "../../components/Logo";
import SearchDesktop from "../../components/Search/SearchDesktop";
import Navigation from "../../components/Navigation";
import HumburgerButton from "../../components/HumburgerButton";
import MobileNavigation from "../mobileNavigation/MobileNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import SearchButton from "../../components/Search/SearchButton";

const Header = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  return (
    <HeaderContainer>
      <div className="header-top">
        <div className="flex items-center">
          {isMobile && <HumburgerButton handleMobileMenu={handleMobileMenu} />}
          <Logo />
        </div>
        {isTablet && <SearchDesktop />}
        <div className="flex items-center gap-2">
          {isMobile && <SearchButton />}
          <Login />
        </div>
      </div>
      <div className="header-bottom">
        <Navigation />
      </div>
      {isMobileMenuVisible && (
        <div className="mobile-navigation">
          <MobileNavigation />
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: relative;
  z-index: 3;
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid rgb(215, 215, 215);
    padding: 12px 16px;
    @media (min-width: 769px) {
      padding: 12px 32px;
    }
  }
  .header-bottom {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  .mobile-navigation-container {
    position: relative;
  }
`;
