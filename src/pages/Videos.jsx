import Header from "../components/header/Header";
import Movies from "../components/movies/Movies";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/pages/_videos.scss";
import "../scss/_common.scss";

function Videos() {
	return (
		<div className="videos wrapper-page">
			<div className="videos__body page-body">
				<Header />
				<div className="page-content">
					<Movies />
				</div>
			</div>
			<SideNavigation />
		</div>
	);
}

export default Videos;
