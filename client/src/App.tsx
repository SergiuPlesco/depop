import { BrowserRouter } from "react-router-dom";
import Pages from "./components/AppNavigation/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

export default App;
