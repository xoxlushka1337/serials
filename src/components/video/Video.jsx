import React from "react";
import ReactPlayer from "react-player";

import "./_video.scss";
import { useDispatch, useSelector } from "react-redux";
import { setVideoActive } from "../../redux/slices/videoActiveSlice";

const Video = () => {
	const videoActive = useSelector(state => state.videoActive.videoActive);
	const dispatch = useDispatch();

	return (
		<div
			className={`video ${videoActive ? "video__active" : ""}`}
			onClick={() => dispatch(setVideoActive(false))}>
			<ReactPlayer
				onClick={e => e.stopPropagation()}
				className={`video__content`}
				url="https://youtu.be/PX6KNzyQfZM?si=LVAieU5pcJtiME7A"
				controls={true}
			/>
		</div>
	);
};

export default Video;
