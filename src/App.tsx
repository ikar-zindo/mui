import React from "react";
import './App.css';
import Preloader from "./components/common/elements/Preloader";
import MuiRadioButton from "./components/mui/MuiRadioButton.tsx";
import MuiTextField from "./components/mui/MuiTextField.tsx";
import MuiCheckBox from "./components/mui/MuiCheckBox.tsx";

const App: React.FC = () => {
	const initialized = true

	if (!initialized) {
		return <Preloader/>;
	}

	return (
		<>
			{/*<FabIntegrationSnackbar/>*/}
			<MuiRadioButton/>
			<MuiCheckBox/>
			<MuiTextField/>
			{/*<MuiSelect/>*/}
			{/*<MuiTypography></MuiTypography>*/}
			{/*<MuiButton></MuiButton>*/}
		</>
	);
};

export default App;