import { useSelector } from "react-redux";
import Banner from "../banner/Banner";

import "./_movies.scss";
import NotFound from "../not-found/NotFound";

function Movies() {
	const categories = useSelector(state => state.filters.category);
	const searchValue = useSelector(state => state.filters.searchValue);
	const movie = useSelector(state => state.movies.movies);

	const filteredMovies =
		categories.length === 0
			? movie
			: movie.filter(movie =>
					movie.category.some(category => categories.includes(category))
			  );

	return (
		<div className="movies">
			{filteredMovies.length === 0 ? (
				<NotFound />
			) : (
				<div className="movies__content">
					{filteredMovies
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
			)}
		</div>
	);
}

export default Movies;
