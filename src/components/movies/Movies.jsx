import Banner from "../banner/Banner";

import "./_movies.scss";

function Movies({ movie, selectedCategories }) {
	const filteredMovies =
		selectedCategories.length === 0
			? movie
			: movie.filter(movie =>
					movie.category.some(category => selectedCategories.includes(category))
			  );

	return (
		<div className="movies">
			<div className="container">
				<div className="movies__content">
					{filteredMovies.map(el => (
						<div key={el.id}>
							<Banner title={el.title} season={el.season} img={el.img} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Movies;
