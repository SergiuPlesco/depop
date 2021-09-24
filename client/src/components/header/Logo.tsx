import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <h1>depop</h1>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  h1 {
    color: rgb(255, 35, 0);
  }
`;
