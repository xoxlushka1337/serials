import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./_menu.scss";

const Menu = () => {
	const menu = ["ABOUT", "VIDEOS", "FEATURED"];
	const menuLink = ["//", "/videos", "/featured"];

	const location = useLocation();
	let currentUrl = location.pathname;

	const [menuActiveIndex, setMenuActiveIndex] = useState(currentUrl);

	const onClickMenu = url => {
		setMenuActiveIndex(url);
	};

	if (menuActiveIndex === "/") {
		currentUrl = "//";
	}

	console.log(currentUrl);
	return (
		<nav>
			<ul className="menu">
				{menu.map((value, i) => (
					<li
						key={i}
						onClick={() => onClickMenu(`${value}`)}
						className="menu__list">
						<Link
							to={`${menuLink[i]}`}
							className={`menu__list-link ${
								currentUrl === `${menuLink[i]}` ? "menu__list-link_active" : ""
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
