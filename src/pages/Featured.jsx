import { useSelector } from "react-redux";
import Menu from "../components/menu/Menu";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/_common.scss";
import "../scss/pages/_featured.scss";

import MoviesRandom from "../components/movies-random/MoviesRandom";

const Featured = () => {
	const movie = useSelector(state => state.movies.movies);

	return (
		<div className="featured wrapper-page">
			<div className="page-body">
				<div className="featured__header">
					<Menu />
				</div>
				<div className="featured__title">
					<img
						className="featured__title-img"
						src="./imgs/icon/FEATURED.svg"
						alt=""
					/>
				</div>
				<MoviesRandom />
			</div>
			<SideNavigation />
		</div>
	);
};

export default Featured;
