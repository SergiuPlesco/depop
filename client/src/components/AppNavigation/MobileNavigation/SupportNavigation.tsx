import { SUPPORT_MENU_NAMES } from "../../../common/constants";
const SupportNavigation = () => {
  return (
    <nav className="pt-4 pb-2 border-b">
      <h3 className="mb-2 font-bold text-base">More from Depop</h3>
      <ul className="columns-2 gap-6 mt-4">
        {Object.values(SUPPORT_MENU_NAMES).map((name) => {
          return (
            <li
              key={name.value}
              className="cursor-pointer mb-4 w-full text-xs font-light tracking-widest text-gray-600"
            >
              <a href={name.link}>{name.value}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SupportNavigation;
