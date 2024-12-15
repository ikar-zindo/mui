import React from "react";
import './App.css';
import Preloader from "./components/common/elements/Preloader";
import {Box, Button, Container, createTheme, Paper, Stack, ThemeProvider, Typography} from "@mui/material";
import MuiTypography from "./components/mui/MuiTypography.tsx";
import MuiButton from "./components/mui/MuiButton.tsx";
import MuiTextField from "./components/mui/MuiTextField.tsx";
import MuiSelect from "./components/mui/MuiSelect.tsx";
import MuiRadioButton from "./components/mui/MuiRadioButton.tsx";
import MuiCheckBox from "./components/mui/MuiCheckBox.tsx";
import FabIntegrationSnackbar from "./components/mui/FabIntegrationSnackbar.tsx";

const theme = createTheme({
	palette: {
		primary: {
			main: "#013e87",
		},
		secondary: {
			main: "#2e74c9"
		}
	},
	typography: {
		h1: {
			fontSize: "3rem",
			fontWeight: 600
		},
		h2: {
			fontSize: "1.75rem",
			fontWeight: 600
		},
		h3: {
			fontSize: "1.5rem",
			fontWeight: 600
		},
	},
})

const serviceList = ["Service 1", "Service 2", "Service 3"];

const App: React.FC = () => {
	const initialized = true

	if (!initialized) {
		return <Preloader/>;
	}

	return (
		<>
			<FabIntegrationSnackbar/>
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

// <div>
// 	<Routes>
// 		<Route path='/' element={<HomePage/>}/>
// 		<Route path='/login/*' element={<WithAuthRedirect><LoginPage/></WithAuthRedirect>}/>
// 	</Routes>
// </div>


// <ThemeProvider theme={theme}>
// 	<Container>
// 		<Typography variant="h1" sx={{
// 			my: '4px',
// 			textAlign: 'center',
// 			color: 'primary.main'
// 		}}>
// 			K-Curry-Jib
// 		</Typography>
// 		<Typography variant="h2" sx={{
// 			my: '4px',
// 			textAlign: 'center',
// 			color: 'primary.main'
// 		}}>
// 			Menu
// 		</Typography>
//
// 		<Box sx={{
// 			pt: 4,
// 			display: "flex",
// 			justifyContent: "space-between",
// 			gap: 4,
// 			flexDirection: {xs: "column", md: "row"}
// 		}}>
// 			{serviceList.map((service) => (
// 				<Paper elevation={3} sx={{width: {xs: 1, md: 320}}}>
// 					<Box sx={{m: 3}}>
// 						<Typography variant="h3">{service}</Typography>
// 						<Typography sx={{mt: 2}}>
// 							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, facilis fuga,
// 							itaque, iure minus nemo nobis omnis sunt unde ut veritatis voluptatem voluptatibus. Ad animi
// 							asperiores debitis distinctio dolor dolorem excepturi exercitationem explicabo facere hic ipsa
// 							ipsam,
// 							laudantium nam necessitatibus numquam officia pariatur quidem quisquam sit, sunt suscipit
// 							tenetur
// 							totam vero. Animi cumque earum enim esse molestiae molestias nemo perspiciatis, quasi quis
// 							repellat
// 							rerum sunt temporibus! Doloremque enim eveniet harum impedit in inventore iure officia pariatur
// 							quis
// 							ratione reprehenderit, sapiente!</Typography>
// 						<Button variant="contained"
// 						        color="secondary"
// 						        sx={{
// 							        mt: 2
// 						        }}>Learn more...</Button>
// 					</Box>
// 				</Paper>
// 			))}
// 		</Box>
// 	</Container>
// </ThemeProvider>