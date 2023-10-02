import { useSelector } from "react-redux";

import "./_movies-random.scss";
import "../../scss/_common.scss";
import Banner from "../banner/Banner";
import NotFound from "../not-found/NotFound";

const MoviesRandom = () => {
	const movie = useSelector(state => state.movies.movies);

	const categories = useSelector(state => state.filters.category);
	const searchValue = useSelector(state => state.filters.searchValue);

	const moviesFeatured = [];

	for (let i = 0; i < movie.length; i++) {
		if (movie[i].category.includes("new products")) {
			moviesFeatured.push(movie[i]);
		}
	}

	const filteredRandomMovies =
		categories.length === 0
			? moviesFeatured
			: moviesFeatured.filter(movie =>
					movie.category.some(category => categories.includes(category))
			  );

	return (
		<div className="movies-random">
			{filteredRandomMovies.length === 0 ? (
				<NotFound />
			) : (
				<div className="movies-random__content">
					{filteredRandomMovies
						.filter(obj => {
							if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
								return true;
							}
							return false;
						})
						.map(el => (
							<div
								key={el.id}
								className={el.id === 6 ? "full-width-banner" : "grid-banner"}>
								<Banner
									title={el.title}
									season={el.season}
									img={el.featuredImg}
									id={el.id}
								/>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default MoviesRandom;
