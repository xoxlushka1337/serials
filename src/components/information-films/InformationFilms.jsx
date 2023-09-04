import { useSelector } from "react-redux";
import "./_informationFilms.scss";

const InformationFilms = ({ movieIndex }) => {
	const movie = useSelector(state => state.movies.movies);

	const genre = movie[movieIndex].category.join(", ");
	// console.log(genre.join().split(","));

	return (
		<div className="information-films">
			<div className="information-films__contacts">
				<h3 className="information-films__title">FOLLOW US</h3>
				<div className="information-films__network">
					<img
						className="information-films__icon"
						src="./imgs/icon/vk.svg"
						alt="404"
					/>
					<img
						className="information-films__icon"
						src="./imgs/icon/ytub.svg"
						alt="404"
					/>
					<img
						className="information-films__icon"
						src="./imgs/icon/twitter.svg"
						alt="404"
					/>
				</div>
			</div>
			<div className="information-films__content">
				<div className="information-films__container">
					<h3 className="information-films__subtitle">PREMIERE</h3>
					<p className="information-films__text">
						{movie[movieIndex].premiere}
					</p>
				</div>
				<div className="information-films__container">
					<h3 className="information-films__subtitle">DIRECTOR</h3>
					<p className="information-films__text">
						{movie[movieIndex].director}
					</p>
				</div>
				<div className="information-films__container">
					<h3 className="information-films__subtitle">MUSIC BY</h3>
					<p className="information-films__text">{movie[movieIndex].music}</p>
				</div>
				<div className="information-films__container">
					<h3 className="information-films__subtitle">GENRE</h3>
					<p className="information-films__text">{genre}</p>
				</div>
			</div>
		</div>
	);
};

export default InformationFilms;
