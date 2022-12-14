import styled from "styled-components";

const MainContent = () => {
  return (
    <MainContentContainer>
      <h2>Main content container</h2>
    </MainContentContainer>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;
