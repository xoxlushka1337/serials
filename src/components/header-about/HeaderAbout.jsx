import "../header/_header.scss";
import "./_header-about.scss";

import Burger from "../burger/Burger";
import Menu from "../menu/Menu";

const HeaderAbout = () => {
	return (
		<div className="header">
			{/* <div className="header__"></div> */}
			<Menu />
			<div className="header__container header-about__container">
				<div className="header__content">
					<h1 className="header__logo">TeanStream</h1>
					<Burger />
				</div>
			</div>
		</div>
	);
};

export default HeaderAbout;
