import styled from "styled-components";
import UserHeaderNavigation from "../AppNavigation/UserHeaderNavigation";
import MobileNavigation from "../AppNavigation/MobileNavigation/MobileNavigation";
import Logo from "../../components/Logo";
import SearchDesktop from "../../components/Search/SearchDesktop";
import useScreenSize from "../../hooks/useScreenSize";
import Navigation from "../AppNavigation/DesktopNavigation/Navigation";

const Header = () => {
  const { isTablet } = useScreenSize();

  return (
    <HeaderContainer>
      <div className="header-top">
        <div className="flex items-center">
          <MobileNavigation />
          <Logo />
        </div>
        {isTablet && <SearchDesktop />}
        <div className="flex items-center gap-2">
          <UserHeaderNavigation />
        </div>
      </div>
      {isTablet && <Navigation />}
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
    padding: 0.75rem 1rem;
    @media (min-width: 769px) {
      padding: 0.75rem 2rem;
    }
  }
`;
