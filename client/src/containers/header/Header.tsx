import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Login";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import Navigation from "../../components/Navigation";
import HumburgerButton from "../../components/HumburgerButton";
import MobileNavigation from "../mobileNavigation/MobileNavigation";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenuVisible(true);
  };
  return (
    <HeaderContainer>
      <div className="header-top">
        <HumburgerButton handleMobileMenu={handleMobileMenu} />
        <Logo />
        <SearchBar />
        <Login />
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
  padding: 0 1rem;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid rgb(215, 215, 215);
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
