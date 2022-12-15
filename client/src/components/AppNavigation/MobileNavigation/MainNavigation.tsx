import ArrowLeft from "../../../assets/ArrowLeft";
import { MENU_NAMES } from "../../../common/constants";
import ExtraNavigation from "./ExtraNavigation";

const MainNavigation = () => {
  return (
    <nav className="pt-4 pb-2">
      <h3 className="mb-2 font-bold text-base">Browse Depop</h3>
      <ul>
        {Object.values(MENU_NAMES).map((name) => {
          return (
            <li key={name.value} className="border-b">
              <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light tracking-wide text-gray-600 text-sm">
                <span className="block">{name.value}</span>
                <span className="block">
                  <ArrowLeft />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <ExtraNavigation />
    </nav>
  );
};

export default MainNavigation;
