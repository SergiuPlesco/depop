import styled from "styled-components";
import Login from "./Login";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-top">
        <Logo />
        <SearchBar />
        <Login />
      </div>
      <div className="header-bottom">
        <Navigation />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 0 1rem 1rem;

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid rgb(215, 215, 215);
  }
`;
