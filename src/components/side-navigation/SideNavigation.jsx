import Categories from "../categories/Categories";
import "./sideNavigation.scss";

import { useSelector } from "react-redux";

const SideNavigation = () => {
	const isOpenPanel = useSelector(state => state.isOpenPanel.isOpenPanel);

	return (
		<div
			className={`side-navigation  ${
				isOpenPanel ? "side-navigation-open" : ""
			}`}>
			<div className="side-navigation__wrapper">
				<div className="side-navigation__contacts">
					<h3 className="side-navigation__text">FOLLOW US</h3>
					<div className="side-navigation__network">
						<img
							className="side-navigation__icon"
							src="./imgs/icon/vk.svg"
							alt="404"
						/>
						<img
							className="side-navigation__icon"
							src="./imgs/icon/ytub.svg"
							alt="404"
						/>
						<img
							className="side-navigation__icon"
							src="./imgs/icon/twitter.svg"
							alt="404"
						/>
					</div>
				</div>
				<h3 className="side-navigation__title">Genre</h3>
				<Categories />
			</div>
		</div>
	);
};

export default SideNavigation;
