import Header from "./header/Header";
import Main from "./Main";
import Footer from "./Footer";
import Navigation from "../components/AppNavigation/Navigation";
import useScreenSize from "../hooks/useScreenSize";

const Home = () => {
  const { isTablet } = useScreenSize();
  return (
    <>
      <Header />
      {isTablet && <Navigation />}
      <Main />
      <Footer />
    </>
  );
};

export default Home;
