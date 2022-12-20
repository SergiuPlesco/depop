import { useState } from "react";

type NavigationItemType = {
  menu: {
    name: string;
    submenu: {
      [key: string]: {
        name: string;
        link: string;
      };
    };
  };
};

const NavigationItem: React.FC<NavigationItemType> = ({ menu }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const handleSubmenuVisibility = (state: boolean) => () => {
    setIsSubmenuVisible(state);
  };

  return (
    <li key={menu.name}>
      <button
        onMouseEnter={handleSubmenuVisibility(true)}
        onMouseLeave={handleSubmenuVisibility(false)}
      >
        {menu.name}
      </button>
      {isSubmenuVisible && (
        <div
          className="absolute top-full left-auto pt-1 bg-white rounded-sm shadow"
          onMouseEnter={handleSubmenuVisibility(true)}
          onMouseLeave={handleSubmenuVisibility(false)}
        >
          <ul className="text-sm w-56 p-0 m-0">
            {Object.values(menu.submenu).map((submenu) => {
              return (
                <li className="border-b relative last:border-0">
                  {/* should be made a Link later */}
                  <a
                    href=""
                    className="flex justify-between items-center py-3 px-4 hover:bg-black hover:text-white last:rounded-b-sm"
                  >
                    {submenu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
