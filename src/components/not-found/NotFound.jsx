import "./_not-found.scss";

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="not-found__wrapper">
				<img
					className="not-found__img"
					src="./imgs/not-found.png"
					alt="not found"
				/>
				<p className="not-found__text">
					Unfortunately, nothing was found for your request...
				</p>
			</div>
		</div>
	);
};

export default NotFound;
