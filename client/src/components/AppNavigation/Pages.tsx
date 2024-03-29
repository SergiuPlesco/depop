import { Routes, Route } from "react-router-dom";
import Paths from "./Paths";
import SignUp from "../../containers/SignUp";
import Login from "../../containers/Login";
import Home from "../../containers/Home";

const Pages = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      <Route path={Paths.signUp} element={<SignUp />} />
      <Route path={Paths.login} element={<Login />} />
    </Routes>
  );
};

export default Pages;
