import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_NAMES } from "../../common/constants";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        {Object.values(MENU_NAMES).map((menu) => {
          return (
            <li key={menu.name}>
              <Link to="">{menu.name}</Link>
            </li>
          );
        })}
      </NavList>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav``;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    a {
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
