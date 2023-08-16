import { useState } from "react";
import Categories from "../categories/Categories";
import "./sideNavigation.scss";

const SideNavigation = ({ categories, onCategorySelect }) => {
	// console.log(categoriesFilter());
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategorySelect = category => {
		setSelectedCategory(category);
		onCategorySelect(category);
	};
	return (
		<div className="side-navigation">
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
			<Categories
				categories={categories}
				onCategorySelect={handleCategorySelect}
			/>
		</div>
	);
};

export default SideNavigation;