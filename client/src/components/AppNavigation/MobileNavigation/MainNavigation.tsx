import { useState } from "react";
import ArrowRight from "../../../assets/ArrowRight";
import { MENU_NAMES } from "../../../common/constants";
import ExtraNavigation from "./ExtraNavigation";
import Submenu from "./Submenu";

const MainNavigation = () => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const openSubmenu = () => {
    setIsSubmenuVisible(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuVisible(false);
  };
  return (
    <nav className="pt-4 pb-2">
      <h3 className="mb-2 font-bold text-base">Browse Depop</h3>
      <ul>
        {Object.values(MENU_NAMES).map((menu) => {
          return (
            <li key={menu.name} className="border-b">
              <button
                className="flex justify-between items-center cursor-pointer py-3 w-full font-light tracking-wide text-gray-600 text-sm"
                onClick={() => {
                  openSubmenu();
                }}
              >
                <span className="block">{menu.name}</span>
                <span className="block">
                  <ArrowRight />
                </span>
              </button>

              <Submenu
                title={menu.name}
                closeSubmenu={closeSubmenu}
                isSubmenuVisible={isSubmenuVisible}
              />
            </li>
          );
        })}
      </ul>
      <ExtraNavigation />
    </nav>
  );
};

export default MainNavigation;
