import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
