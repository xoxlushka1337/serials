import "./_burger.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenPanel } from "../../redux/slices/openPanelSlice";

const Burger = () => {
	const isOpenPanel = useSelector(state => state.isOpenPanel.isOpenPanel);
	const dispatch = useDispatch();

	function toggleOpen() {
		dispatch(setIsOpenPanel(!isOpenPanel)); // Инвертируем предыдущее значение
	}

	return (
		<div
			onClick={() => toggleOpen()}
			className={`burger ${isOpenPanel ? "burger-open" : ""}`}>
			<div className="burger__btn">
				<span className="burger__top"></span>
				<span className="burger__middle"></span>
				<span className="burger__bot"></span>
			</div>
		</div>
	);
};

export default Burger;
