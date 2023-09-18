import { useDispatch, useSelector } from "react-redux";

import "./_trailerImg.scss";

import { ReactComponent as Play } from "../../img/icon/play.svg";

import { setVideoActive } from "../../redux/slices/videoActiveSlice";

const TrailerImg = () => {
	const movie = useSelector(state => state.movies.movies);
	const movieIndex = useSelector(state => state.movieIndex.movieIndex);

	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(setVideoActive(true))}
			className="trailer"
			style={{
				backgroundImage: `url(./imgs/trailer/${movie[movieIndex].imgTrailer})`,
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
