import React from "react";
import styled, { css } from "styled-components";
const Login = () => {
  return (
    <LoginContainer>
      <Button primary>Sign up</Button>
      <Button>Login</Button>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
`;
interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  primary?: boolean;
}

const Button = styled.div<ButtonProps>`
  ${(props) =>
    props.primary &&
    css`
      background-color: #000000;
      color: #fff;
    `};
  padding: 0.3rem 1rem;
  font-weight: bold;
`;
