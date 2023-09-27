import Menu from "../components/menu/Menu";
import Movies from "../components/movies/Movies";
import Search from "../components/search/Search";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/pages/_videos.scss";
import "../scss/_common.scss";
import Burger from "../components/burger/Burger";
import Header from "../components/header/Header";

function Videos() {
	return (
		<div className="videos wrapper-page">
			{/* <DecorativeScroll /> */}
			<div className="videos__body page-body">
				<Header />
				{/* <div className="videos__header header">
					<Menu />
					<div className="header__container">
						<div className="header__content">
							<Search />
							<h1 className="header__logo">TeanStream</h1>
							<Burger />
						</div>
					</div>
				</div> */}
				<div className="page-content">
					<Movies />
				</div>
			</div>
			<SideNavigation />
		</div>
	);
}

export default Videos;
