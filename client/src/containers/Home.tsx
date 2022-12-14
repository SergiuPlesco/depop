import Header from "../components/header/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
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
