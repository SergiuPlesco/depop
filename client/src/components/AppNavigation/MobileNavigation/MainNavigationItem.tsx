import React, { useState } from "react";
import ArrowRight from "../../../assets/ArrowRight";
import Submenu from "./Submenu";

type MainNavigationItemType = {
	menu: {
		name: string;
	};
};

const MainNavigationItem: React.FC<MainNavigationItemType> = ({ menu }) => {
	const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
	const openSubmenu = () => {
		setIsSubmenuVisible(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuVisible(false);
	};

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

			<Submenu title={menu.name} closeSubmenu={closeSubmenu} isSubmenuVisible={isSubmenuVisible} />
		</li>
	);
};

export default MainNavigationItem;
