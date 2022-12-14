import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <li>
          <Link to="">Womenswear</Link>
        </li>
        <li>
          <Link to="">Menswear</Link>
        </li>
        <li>
          <Link to="">Jewelry</Link>
        </li>
        <li>
          <Link to="">Beauty</Link>
        </li>
        <li>
          <Link to="">More</Link>
        </li>
        <li>
          <Link to="">Brands</Link>
        </li>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  border-bottom: 0.0625rem solid rgb(238, 238, 238);
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    display: flex;
  }

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
