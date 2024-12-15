import React from "react";
import './App.css';
import Preloader from "./components/common/elements/Preloader";
import FabIntegrationSnackbar from "./components/mui/FabIntegrationSnackbar.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavCss from "./components/BottomNavCss.tsx";

const isMobileDevice = (): boolean => {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android|iPhone|iPad|iPod/i.test(userAgent);
};

const App: React.FC = () => {
	const initialized = true
	const isMobile = isMobileDevice();

	if (!initialized) {
		return <Preloader/>;
	}

	return (
		<>
			<CssBaseline/>
			{isMobile && <FabIntegrationSnackbar/>}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/settings" element={<ProfilePage />} />
			</Routes>
			{isMobile && <BottomNavCss/>}
		</>
	);
};

export default App;