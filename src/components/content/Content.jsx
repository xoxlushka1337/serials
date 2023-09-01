import { useSelector } from "react-redux";

import "./_content.scss";

const Content = ({ prevMovie, nextMovie, movieIndex }) => {
	const movie = useSelector(state => state.movies.movies);

	return (
		<div className="content">
			<h1 className="content__title">{movie[movieIndex].title}</h1>
			<p className="content__description">{movie[movieIndex].description}</p>
			<div className="content__wrapper">
				<div className="content__number">01</div>
			</div>
			<button onClick={() => prevMovie()}>Назад</button>
			<button onClick={() => nextMovie()}>Вперед</button>
		</div>
	);
};

export default Content;
