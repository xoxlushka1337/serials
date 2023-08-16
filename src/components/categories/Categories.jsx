import "./_categories.scss";

const Categories = ({ categories, onCategorySelect }) => {
	return (
		<ul className="categories">
			{categories.map(category => (
				<li
					className="categories__li"
					key={category}
					onClick={() => onCategorySelect(category)}>
					{category}
				</li>
			))}
		</ul>
	);
};

export default Categories;
