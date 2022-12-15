import React from "react";
import { ChangeEventHandler, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import styled from "styled-components";

const demoWords: string[] = [
  "vintage",
  "princess polly",
  "urban outfitters",
  "brandy melville",
  "corset top",
  "zara",
  "jordan 1",
  "doc martens",
];

const SearchDesktop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(() => "");
  const [showResult, setShowResult] = useState<boolean>(false);

  const showResultContainer = () => {
    setShowResult((prev) => !prev);
  };

  const OnSearchQueryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(() => e.target.value);
  };
  return (
    <SearchBarContainer>
      <form>
        <img src={SearchIcon} alt="search icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => OnSearchQueryChange(e)}
          onFocus={showResultContainer}
          onBlur={showResultContainer}
          placeholder={"Search for item, brands, or styles..."}
        />
        {showResult && (
          <ResultContainer>
            <ResultList>
              {demoWords.map((word) => {
                return (
                  <li key={word} className="result-list-item">
                    <div className="search-item-container">
                      <p>{word}</p>
                    </div>
                  </li>
                );
              })}
            </ResultList>
          </ResultContainer>
        )}
      </form>
    </SearchBarContainer>
  );
};

export default SearchDesktop;

const SearchBarContainer = styled.div`
  flex: 0.7;
  max-width: 44rem;
  form {
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    position: relative;
  }
  img {
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0.45rem;
    left: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0 0.5rem 0 2.5rem;
    border: 2px solid rgb(38, 38, 38);
    border-radius: 4px;
    height: 2.5rem;
  }
`;

const ResultContainer = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 0px;
  border-radius: 2px;
  position: absolute;
  top: 3rem;
  left: 0px;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  .search-item-container {
    padding: 0.5rem;
    width: 100%;
    text-align: left;
    font-size: 0.875rem;

    :hover {
      background-color: rgb(61, 55, 189);
      color: rgb(255, 255, 255);
      outline: none;
    }

    p {
      margin: 0;
      width: 1005;
    }
  }
`;
