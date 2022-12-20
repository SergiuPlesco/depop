import styled from "styled-components";
import DesktopLogo from "../../assets/DesktopLogo";
import { Link } from "react-router-dom";
import Paths from "../AppNavigation/Paths";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={Paths.home}>
        <DesktopLogo />
      </Link>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 90px;
  height: 23px;
`;
