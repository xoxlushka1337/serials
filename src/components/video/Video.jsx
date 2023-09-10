import React from "react";
import ReactPlayer from "react-player";

import "./_video.scss";
import { useDispatch, useSelector } from "react-redux";
import { setVideoActive } from "../../redux/slices/videoActiveSlice";

const Video = () => {
	const movie = useSelector(state => state.movies.movies);
	const movieIndex = useSelector(state => state.movieIndex.movieIndex);

	const videoActive = useSelector(state => state.videoActive.videoActive);
	const dispatch = useDispatch();

	return (
		<div
			className={`video ${videoActive ? "video__active" : ""}`}
			onClick={() => dispatch(setVideoActive(false))}>
			<ReactPlayer
				onClick={e => e.stopPropagation()}
				className={`video__content`}
				url={movie[movieIndex].trailer}
				controls={true}
				width={"74rem"}
				height={"46.8rem"}
			/>
		</div>
	);
};

export default Video;
