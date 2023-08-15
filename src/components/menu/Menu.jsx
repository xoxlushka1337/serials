import React from "react";

import "./_menu.scss";

const Menu = () => {
	return (
		<nav>
			<ul className="menu">
				<li className="menu__list">
					<a className="menu__list-link" href="./">
						ABOUT
					</a>
				</li>
				<li className="menu__list">
					<a className="menu__list-link" href="./">
						VIDEOS
					</a>
				</li>
				<li className="menu__list">
					<a className="menu__list-link" href="./">
						FEATURED
					</a>
				</li>
				<li className="menu__list">
					<a className="menu__list-link" href="./">
						GALLERY
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Menu;
