import styled from "styled-components";
import { MENU_NAMES } from "../../../common/constants";
import ExtraNavigationItem from "./ExtraNavigationItem";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        {Object.values(MENU_NAMES).map((menu) => {
          return <NavigationItem key={menu.name} menu={menu} />;
        })}
      </NavList>
      <ExtraNavigationItem />
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  display: flex;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    button {
      display: block;
      padding: 0.75rem 1rem;
      text-decoration: none;
      color: black;
      font-weight: bold;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
