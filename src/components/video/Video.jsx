import React from "react";
import ReactPlayer from "react-player/youtube";

const Video = () => {
	return (
		<div className="video">
			<ReactPlayer
				url={`https://youtu.be/b9EkMc79ZSU?si=2eqCKhcEH3E76LKz`}
				playing={true}
				controls="true"
			/>
		</div>
	);
};

export default Video;
