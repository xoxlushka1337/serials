import { useSelector } from "react-redux";
import "./_categories.scss";

const Categories = ({ onCategorySelect }) => {
	const categories = useSelector(state => state.filters.categories);
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
