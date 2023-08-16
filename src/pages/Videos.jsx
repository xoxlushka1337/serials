import { useState } from "react";
import Menu from "../components/menu/Menu";
import Movies from "../components/movies/Movies";
import Search from "../components/search/Search";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/pages/_videos.scss";

function Videos({ movie }) {
	const categories = [
		"all",
		"fantastic",
		"comedy",
		"melodrama",
		"action movie",
		"romance",
		"romantic comedy",
		"detective",
		"horror",
		"cartoon",
		"science fiction",
	];

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const handleCategorySelect = category => {
		setSelectedCategories([category]); // Заменяем текущий массив на новую выбранную категорию
	};

	return (
		<div className="videos">
			<div className="videos__content">
				<div className="content-video">
					<div className="content-video__body">
						<div className="content-video__header">
							<Menu />
							<Search
								searchValue={searchValue}
								setSearchValue={setSearchValue}
							/>
						</div>
						<Movies
							searchValue={searchValue}
							movie={movie}
							selectedCategories={selectedCategories}
						/>
					</div>
					<SideNavigation
						categories={categories}
						onCategorySelect={handleCategorySelect}
					/>
				</div>
			</div>
		</div>
	);
}

export default Videos;
