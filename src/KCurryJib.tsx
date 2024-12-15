import React from "react";
import {Provider} from "react-redux";
import store from "./store/store";
// @ts-expect-error: not use
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const KCurryJib: React.FC = () => {
	return (
		// <BrowserRouter basename={import.meta.env.BASE_URL}
		//                future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
		<HashRouter> {/* HashRouter создаёт хеш приложения, что позволяет разместить на gh-pages */}
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<App/>
				</ThemeProvider>
			</Provider>
		</HashRouter>
		// </BrowserRouter>
	);
};

export default KCurryJib;