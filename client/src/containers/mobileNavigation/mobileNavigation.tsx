import React from "react";
import styled from "styled-components";

const MobileNavigation = () => {
  return (
    <MobileNavigationContainer>
      <div>mobileNavigation</div>
    </MobileNavigationContainer>
  );
};

export default MobileNavigation;

const MobileNavigationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
`;
