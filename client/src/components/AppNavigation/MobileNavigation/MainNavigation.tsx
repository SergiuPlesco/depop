import { MENU_NAMES } from "../../../common/constants";
import ExtraNavigation from "./ExtraNavigation";
import MainNavigationItem from "./MainNavigationItem";

const MainNavigation = () => {
	return (
		<nav className="pt-4 pb-2">
			<h3 className="mb-2 font-bold text-base">Browse Depop</h3>
			<ul>
				{Object.values(MENU_NAMES).map((menu) => {
					return <MainNavigationItem menu={menu} />;
				})}
			</ul>
			<ExtraNavigation />
		</nav>
	);
};

export default MainNavigation;
