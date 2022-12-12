import styled, { css } from "styled-components";
import useScreenSize from "../hooks/useScreenSize";

const Login = () => {
  const { isTablet } = useScreenSize();
  return (
    <LoginContainer>
      <Button primary>Sign up</Button>
      {isTablet && <Button>Login</Button>}
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justig-content: center;
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.div<ButtonProps>`
  ${(props) =>
    props.primary &&
    css`
      background-color: rgb(38, 38, 38);
      color: #fff;
    `};
  padding: 0.5rem 1.25rem;
  font-weight: bold;
  border-radius: 0.125rem;
  font-size: 1rem;
  line-height: 1.125;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  outline: 0px;
`;
