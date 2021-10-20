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
interface ButtonProps {
  primary?: boolean;
}

const Button = styled.div<ButtonProps>`
  ${(props) =>
    props.primary &&
    css`
      background-color: #000000;
      color: #fff;
    `};
  padding: 0.25rem 1rem;
  font-weight: bold;
  border-radius: 0.125rem;
  font-size: 1rem;
  line-height: 1.125;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  outline: 0px;
`;
