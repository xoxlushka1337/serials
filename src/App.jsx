import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Videos from "./pages/Videos";

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Routes>
					<Route exact path="/ABOUT" element={<About />} />
					<Route exact path="/VIDEOS" element={<Videos />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
