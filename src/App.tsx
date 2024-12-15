import React from "react";
import './App.css';
import Preloader from "./components/common/elements/Preloader";

const App: React.FC = () => {
	const initialized = true

	if (!initialized) {
		return <Preloader/>;
	}

	return (
		<>
			{/*<FabIntegrationSnackbar/>*/}
			{/*<MuiRadioButton/>*/}
			{/*<MuiCheckBox/>*/}
			{/*<MuiTextField/>*/}
			{/*<MuiSelect/>*/}
			{/*<MuiTypography></MuiTypography>*/}
			{/*<MuiButton></MuiButton>*/}
		</>
	);
};

export default App;