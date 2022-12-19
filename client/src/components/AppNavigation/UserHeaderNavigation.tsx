import styled, { css } from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import { useLocation, useNavigate } from "react-router-dom";
import Paths from "./Paths";
import SearchButton from "../Search/SearchButton";

const UserHeaderNavigation = () => {
  const { isMobile, isTablet } = useScreenSize();
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate(Paths.signUp);
  };

  const navigateToLogin = () => {
    navigate(Paths.login);
  };

  return (
    <nav>
      <ul className="flex justify-center items-center gap-1">
        {isMobile && (
          <li>
            <SearchButton />
          </li>
        )}
        {!Object.is(location.pathname, Paths.signUp) && (
          <li>
            <Button primary onClick={navigateToSignUp}>
              Sign up
            </Button>
          </li>
        )}
        {isTablet && (
          <li>
            {/* looks like a link. Should be an anchor? */}
            <Button onClick={navigateToLogin}>Login</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default UserHeaderNavigation;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.primary
      ? css`
          background-color: rgb(38, 38, 38);
          color: #fff;
          padding: 0.5rem 1.25rem;
        `
      : css`
          padding: 0.5rem 0;
          margin-left: 0.5rem;
        `};

  font-weight: bold;
  border-radius: 0.125rem;
  font-size: 1rem;
  line-height: 1.125;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  outline: 0px;
`;
