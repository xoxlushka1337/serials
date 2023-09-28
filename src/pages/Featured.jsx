import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/_common.scss";
import "../scss/pages/_featured.scss";

import MoviesRandom from "../components/movies-random/MoviesRandom";
import Header from "../components/header/Header";

const Featured = () => {
	return (
		<div className="featured wrapper-page">
			<div className="page-body">
				<Header />
				<div className="page-content">
					<div className="featured__title">
						<img
							className="featured__title-img"
							src="./imgs/icon/FEATURED.svg"
							alt=""
						/>
					</div>
					<MoviesRandom />
				</div>
			</div>
			<SideNavigation />
		</div>
	);
};

export default Featured;
