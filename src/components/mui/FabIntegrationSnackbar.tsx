import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function FabIntegrationSnackbar() {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={(theme) => ({
					body: {backgroundColor: theme.palette.background.paper},
				})}
			/>
			<div>
				<AppBar position="static" color="primary">
					<Toolbar>
						<IconButton
							edge="start"
							sx={{mr: 2}}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon/>
						</IconButton>
						<Typography variant="h6" color="inherit" component="div">
							App bar
						</Typography>
					</Toolbar>
				</AppBar>

				<Snackbar
					open
					autoHideDuration={600}
					message="Archived"
					action={
						<Button color="inherit" size="small">
							Undo
						</Button>
					}
					sx={{bottom: {xs: 90, sm: 0}}}
				/>
			</div>
		</React.Fragment>
	);
}