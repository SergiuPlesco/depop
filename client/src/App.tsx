import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
