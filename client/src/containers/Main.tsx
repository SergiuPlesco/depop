import styled from "styled-components";
import Banner from "../components/Banner";
import MainContent from "./MainContentContainer";

const Main = () => {
  return (
    <MainContainer>
      <Banner />
      <MainContent />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.main``;
