import "./_header.scss";

import Burger from "../burger/Burger";
import Menu from "../menu/Menu";
import Search from "../search/Search";

const Header = () => {
	return (
		<div className="header">
			<Menu />
			<div className="header__container">
				<div className="header__content">
					<Search />
					<h1 className="header__logo">TeanStream</h1>
					<Burger />
				</div>
			</div>
		</div>
	);
};

export default Header;
