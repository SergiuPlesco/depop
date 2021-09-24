import styled from "styled-components";
import Login from "./Login";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <Login />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
