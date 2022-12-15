import { Link } from "react-router-dom";
import Paths from "../Paths";

const ProfileNavigation = () => {
  return (
    <nav className="pt-6 pb-2 border-b">
      <ul>
        <li className="block mb-4 cursor-pointer">
          <Link className="font-bold text-lg" to={Paths.login}>
            Log in
          </Link>
        </li>
        <li className="block mb-4 cursor-pointer">
          <Link className="font-bold text-lg" to={Paths.signUp}>
            Sign up
          </Link>
        </li>
        <li className="block mb-4 cursor-pointer">
          <Link className="font-bold text-lg" to={Paths.login}>
            Get the app
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNavigation;
