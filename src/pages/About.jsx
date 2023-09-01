import { useSelector } from "react-redux";
import Menu from "../components/menu/Menu";
import { useEffect, useRef, useState } from "react";
import Content from "../components/content/Content";

import "../scss/pages/_about.scss";
import DecorativeScroll from "../components/decorative-scroll/DecorativeScroll";

const About = () => {
	const movie = useSelector(state => state.movies.movies);
	const [movieIndex, setMovieIndex] = useState(0);

	const [loading, setLoading] = useState(true);
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
				setLoading(false);
			})
			.catch(error => {
				console.error("Ошибка предзагрузки изображений:", error);
			});
	}, [movie]);

	const nextMovie = () => {
		if (movieIndex < movie.length - 1) {
			setMovieIndex(movieIndex + 1);
		}
	};

	const prevMovie = () => {
		if (movieIndex > 0) {
			setMovieIndex(movieIndex - 1);
		}
	};

	console.log(loadedImages[movieIndex]);
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
				<DecorativeScroll />
				<div className="about__body">
					<div className="about__header">
						<Menu />
					</div>
					<Content
						movieIndex={movieIndex}
						nextMovie={nextMovie}
						prevMovie={prevMovie}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
