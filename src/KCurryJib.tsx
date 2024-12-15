import React from "react";
import {Provider} from "react-redux";
import store from "./store/store";
// @ts-expect-error: not use
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";

const KCurryJib: React.FC = () => {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}
		               future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
			{/*<HashRouter> /!* HashRouter создаёт хеш приложения, что позволяет разместить на gh-pages *!/*/}
			<Provider store={store}>
				<App/>
			</Provider>
			{/*</HashRouter>*/}
		</BrowserRouter>
	);
};

export default KCurryJib;