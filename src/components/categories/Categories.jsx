import "./_categories.scss";

const Categories = ({ categoriesFilter, movie }) => {
	console.log(categoriesFilter);
	return (
		<ul className="categories">
			<li
				onClick={() => categoriesFilter("fantastic")}
				className="categories__li">
				fantastic
			</li>
			<li className="categories__li">comedy</li>
			<li className="categories__li">melodrama</li>
			<li className="categories__li">action movie</li>
			<li className="categories__li">romance</li>
			<li className="categories__li">romantic comedy</li>
			<li className="categories__li">detective</li>
			<li className="categories__li">horror</li>
			<li className="categories__li">cartoon</li>
			<li className="categories__li">science fiction</li>
		</ul>
	);
};

export default Categories;
