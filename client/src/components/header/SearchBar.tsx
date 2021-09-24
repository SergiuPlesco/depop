import styled from "styled-components";
import Search from "../../assets/search.svg";
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <form>
        <img src={Search} alt="search icon" />
        <input type="text" name="" id="" />
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  flex: 0.6;
  form {
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 0.3rem;
  }
  img {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    border: none;
  }
`;
