import { useDispatch, useSelector } from "react-redux";
import Menu from "../components/menu/Menu";
import { useEffect, useRef, useState } from "react";
import Content from "../components/content/Content";

import "../scss/pages/_about.scss";
import "../scss/_common.scss";
import InformationFilms from "../components/information-films/InformationFilms";

import { setMovieIndex } from "../redux/slices/movieIndexSlice";
import Video from "../components/video/Video";

const About = () => {
	const movie = useSelector(state => state.movies.movies);

	const movieIndex = useSelector(state => state.movieIndex.movieIndex);
	const dispatch = useDispatch();

	const [loadedImages, setLoadedImages] = useState([]);

	useEffect(() => {
		const preloadImages = async () => {
			const images = [];

			for (let i = 0; i < movie.length; i++) {
				const img = new Image();
				img.src = `./imgs/background/${movie[i].background}`;

				await new Promise((resolve, reject) => {
					img.onload = resolve;
					img.onerror = reject;
				});

				images.push(img);
			}
			return images;
		};
		preloadImages()
			.then(images => {
				setLoadedImages(images);
			})
			.catch(error => {
				console.error("Ошибка предзагрузки изображений:", error);
			});
	}, [movie]);

	const nextMovie = () => {
		if (movieIndex === movie.length - 1) {
			dispatch(setMovieIndex(0));
		} else {
			dispatch(setMovieIndex(movieIndex + 1));
		}
	};

	const prevMovie = () => {
		if (movieIndex === 0) {
			dispatch(setMovieIndex(movie.length - 1));
		} else {
			dispatch(setMovieIndex(movieIndex - 1));
		}
	};

	return (
		<div className="about">
			<div
				className={`about__img`}
				style={{
					backgroundImage: loadedImages[movieIndex]
						? `url(./imgs/background/${movie[movieIndex].background})`
						: "",

					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
				}}>
				<div className="about__body page-body">
					<div className="about__header">
						<Menu />
					</div>
					<Content nextMovie={nextMovie} prevMovie={prevMovie} />
				</div>
				<InformationFilms />
				<Video />
			</div>
		</div>
	);
};

export default About;
