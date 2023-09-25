import Menu from "../components/menu/Menu";
import Movies from "../components/movies/Movies";
import Search from "../components/search/Search";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/pages/_videos.scss";
import "../scss/_common.scss";
import Burger from "../components/burger/Burger";

function Videos() {
	return (
		<div className="videos wrapper-page">
			{/* <DecorativeScroll /> */}
			<div className="videos__body page-body">
				<div className="videos__header header">
					<Menu />
					<Search />
					<Burger />
				</div>
				<div className="page-content">
					<Movies />
				</div>
			</div>
			<SideNavigation />
		</div>
	);
}

export default Videos;
