import { useSelector } from "react-redux";

import "./_trailerImg.scss";

import { ReactComponent as Play } from "../../img/icon/play.svg";

const TrailerImg = () => {
	const movie = useSelector(state => state.movies.movies);
	const movieIndex = useSelector(state => state.movieIndex.movieIndex);

	return (
		<div
			className="trailer"
			style={{
				backgroundImage: `url(/imgs/trailer/${movie[movieIndex].imgTrailer})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="trailer__wrapper">
				<Play className="trailer__play" />
				<p className="trailer__text">WATCH TRAILER</p>
			</div>
		</div>
	);
};

export default TrailerImg;
