import useScreenSize from "../../hooks/useScreenSize";
import SearchButton from "./SearchButton";
import SearchDesktop from "./SearchDesktop";

const Search: React.FC = () => {
  const { isMobile } = useScreenSize();

  return <>{isMobile ? <SearchButton /> : <SearchDesktop />}</>;
};

export default Search;
