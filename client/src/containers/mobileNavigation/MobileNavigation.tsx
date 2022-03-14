import React from "react";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
import Login from "../../components/Login";

const MobileNavigation = () => {
  return (
    <MobileNavigationContainer>
      <Login />
      <Navigation />
      <Navigation />
    </MobileNavigationContainer>
  );
};

export default MobileNavigation;

const MobileNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: purple;
  z-index: 2;
`;
