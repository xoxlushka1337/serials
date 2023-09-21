import { useSelector } from "react-redux";

import "./_movies-random.scss";
import "../../scss/_common.scss";
import Banner from "../banner/Banner";
import NotFound from "../not-found/NotFound";

const MoviesRandom = () => {
	const movie = useSelector(state => state.movies.movies);

	const categories = useSelector(state => state.filters.category);
	const searchValue = useSelector(state => state.filters.searchValue);

	const randomMovie = [...movie]; // Создаем копию массива
	randomMovie.sort((a, b) => Math.random() - 0.5); // Сортируем копию массива случайным образом
	const cropMovie = randomMovie.slice(0, movie.length / 2);

	const filteredRandomMovies =
		categories.length === 0
			? cropMovie
			: cropMovie.filter(movie =>
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
};

export default MoviesRandom;
