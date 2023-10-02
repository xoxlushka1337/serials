import "./_banner.scss";

import { setMovieIndex } from "../../redux/slices/movieIndexSlice";

import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Banner = ({ title, season, img, id }) => {
	const dispatch = useDispatch();

	function transferMovieIndex(params) {
		dispatch(setMovieIndex(id));
	}

	const location = useLocation();
	let currentUrl = location.pathname;

	let picturesFolder = "video";

	if (currentUrl === "/featured") {
		picturesFolder = "featured";
	} else {
		picturesFolder = "video";
	}

	return (
		<div className="banner">
			<Link
				to={`//`}
				className="banner__wrapper"
				onClick={() => transferMovieIndex()}>
				<img
					className={`banner__img ${id === 6 ? "banner__img-cover" : ""}`}
					src={`/serials/imgs/${picturesFolder}/` + img}
					alt="404"
				/>
				<div className="banner__container">
					<div className="banner__content">
						<div className="banner__information">
							<h3 className="banner__title">{title}</h3>
							<p className="banner__text">Season: {season}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Banner;
