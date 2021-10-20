import "./App.css";
import Footer from "./containers/Footer";
import Header from "./containers/header/Header";
import Main from "./containers/Main";
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
