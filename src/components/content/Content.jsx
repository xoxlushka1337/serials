import { useSelector } from "react-redux";

import "./_content.scss";

import { ReactComponent as Arrow } from "../../img/icon/arrow.svg";

const Content = ({ prevMovie, nextMovie, movieIndex }) => {
	const movie = useSelector(state => state.movies.movies);

	return (
		<div className="content">
			<h1 className="content__title">{movie[movieIndex].title}</h1>
			<p className="content__description">{movie[movieIndex].description}</p>
			<div className="content__wrapper">
				<div className="content__number">01</div>
			</div>
			<button className={"content__button"} onClick={() => prevMovie()}>
				<Arrow className="content__arrow" />
			</button>
			<button className="content__button" onClick={() => nextMovie()}>
				<Arrow className="content__arrow content__arrow_turn" />
			</button>
		</div>
	);
};

export default Content;
