import React, { useState } from "react";

import "./_menu.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menu = () => {
	const menu = ["ABOUT", "VIDEOS", "FEATURED", "GALLERY"];

	const currentUrl = window.location.pathname;

	const [menuActiveIndex, setMenuActiveIndex] = useState(currentUrl);

	const onClickMenu = index => {
		setMenuActiveIndex(index);
	};

	console.log(currentUrl);
	return (
		<nav>
			<ul className="menu">
				{menu.map((value, i) => (
					<li
						key={i}
						onClick={() => onClickMenu(`/${value}`)}
						className="menu__list">
						<Link
							to={`/${value}`}
							className={`menu__list-link ${
								menuActiveIndex === `/${value}` ? "menu__list-link_active" : ""
							}`}>
							{value}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Menu;
