import ContentVideo from "../components/content-video/ContentVideo";

import "../scss/pages/_videos.scss";

function Videos({ movie }) {
	return (
		<div className="videos">
			<div className="videos__content">
				<ContentVideo movie={movie} />
			</div>
		</div>
	);
}

export default Videos;
