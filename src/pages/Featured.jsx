import { useSelector } from "react-redux";
import Menu from "../components/menu/Menu";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/_common.scss";
import "../scss/pages/_featured.scss";
import Banner from "../components/banner/Banner";

const Featured = () => {
	const movie = useSelector(state => state.movies.movies);

	const categories = useSelector(state => state.filters.category);
	const searchValue = useSelector(state => state.filters.searchValue);

	const cropMovie = movie.slice(0, movie.length / 2);
	const randomMovie = cropMovie.sort(() => Math.random() - 0.5);

	const filteredRandomMovies =
		categories.length === 0
			? randomMovie
			: randomMovie.filter(movie =>
					movie.category.some(category => categories.includes(category))
			  );

	return (
		<div className="featured wrapper-page">
			<div className="page-body">
				<div className="featured__header">
					<Menu />
				</div>
				<div className="featured__title">
					<img
						className="featured__title-img"
						src="./imgs/icon/FEATURED.svg"
						alt=""
					/>
				</div>
				<div className="movies__content">
					{filteredRandomMovies
						.filter(obj => {
							if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
								return true;
							}
							return false;
						})
						.map(el => (
							<div key={el.id}>
								<Banner
									title={el.title}
									season={el.season}
									img={el.img}
									id={el.id}
								/>
							</div>
						))}
				</div>
			</div>
			<SideNavigation />
		</div>
	);
};

export default Featured;
