import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";
import "./scss/_common.scss";
import "./scss/_variables.scss";
import "./scss/normalize.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
