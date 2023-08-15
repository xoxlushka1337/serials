import Menu from "../menu/Menu";

import "./_contentVideo.scss";
import Movies from "../movies/Movies";
import SideNavigation from "../side-navigation/SideNavigation";
import Search from "../search/Search";
import { useState } from "react";

function ContentVideo({ movie }) {
	const [filtered, setFiltered] = useState(movie);

	function categoriesFilter(category) {
		if (category === "all") {
			setFiltered(movie);
		} else {
			let newMovie = [...movie].filter(item => item.category === category);
			setFiltered(newMovie);
		}
	}

	return (
		<div className="content-video">
			<div className="content-video__body">
				<div className="content-video__header">
					<Menu />
					<Search />
				</div>
				<Movies filtered={filtered} />
			</div>

			<SideNavigation
				categoriesFilter={() => categoriesFilter()}
				movie={movie}
			/>
		</div>
	);
}

export default ContentVideo;
