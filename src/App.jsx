import React, { useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./pages/About";
import Videos from "./pages/Videos";

import "./scss/_common.scss";

const routes = [
	{ path: "/", Component: About },
	{ path: "/VIDEOS", Component: Videos },
];

function App() {
	return (
		<div className="wrapper">
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<TransitionGroup>
								<CSSTransition
									key={path}
									timeout={500}
									classNames="fade"
									unmountOnExit>
									<Component />
								</CSSTransition>
							</TransitionGroup>
						}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;
