import styled from "styled-components";
import DesktopLogo from "../assets/DesktopLogo";

const Logo = () => {
  return (
    <LogoContainer>
      <DesktopLogo />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 90px;
  height: 23px;
`;
