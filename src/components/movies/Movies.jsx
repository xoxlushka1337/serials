import Banner from "../banner/Banner";

import "./_movies.scss";

function Movies({ filtered }) {
	return (
		<div className="movies">
			<div className="container">
				<div className="movies__content">
					{filtered.map(el => (
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
