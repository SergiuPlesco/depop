import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <h2>depop</h2>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  h2 {
    color: rgb(255, 35, 0);
    font-weight: bold;
  }
`;
