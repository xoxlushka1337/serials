import Menu from "../components/menu/Menu";
import SideNavigation from "../components/side-navigation/SideNavigation";

import "../scss/_common.scss";

const Featured = () => {
	return (
		<div className="featured wrapper-page">
			<div className="page-body">
				<Menu />
				<img
					className="featured__title"
					src="./imgs/icon/FEATURED.svg"
					alt=""
				/>
			</div>
			<SideNavigation />
		</div>
	);
};

export default Featured;
