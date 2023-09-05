import { useDispatch } from "react-redux";
import { setSelectedCategories } from "../redux/slices/filterSlice";

import Menu from "../components/menu/Menu";
import Movies from "../components/movies/Movies";
import Search from "../components/search/Search";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/pages/_videos.scss";
import DecorativeScroll from "../components/decorative-scroll/DecorativeScroll";

function Videos() {
	const dispatch = useDispatch();

	const handleCategorySelect = category => {
		dispatch(setSelectedCategories([category]));
	};

	return (
		<div className="videos">
			{/* <DecorativeScroll /> */}
			<div className="videos__body">
				<div className="videos__header">
					<Menu />
					<Search />
				</div>
				<Movies />
			</div>
			<SideNavigation onCategorySelect={handleCategorySelect} />
		</div>
	);
}

export default Videos;
