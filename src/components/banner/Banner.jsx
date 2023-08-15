import "./_banner.scss";

const Banner = ({ title, season, img }) => {
	return (
		<div className="banner">
			<a className="banner__wrapper" href="#!">
				<img className="banner__img" src={"./imgs/video/" + img} alt="404" />
				<div className="banner__container">
					<div className="banner__content">
						<h3 className="banner__title">{title}</h3>
						<p className="banner__text">Season {season}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Banner;
