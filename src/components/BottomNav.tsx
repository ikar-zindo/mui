import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BottomNav: React.FC = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate(); // Хук для навигации между страницами

	const handleNavigation = (newValue: number) => {
		setValue(newValue);
		if (newValue === 0) navigate("/"); // Переход на главную страницу
		if (newValue === 1) navigate("/search"); // Переход на страницу поиска
		if (newValue === 2) navigate("/settings"); // Переход на страницу настроек
	};

	return (
		<Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
			<BottomNavigation value={value} onChange={(_, newValue) => handleNavigation(newValue)}>
				<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				<BottomNavigationAction label="Search" icon={<SearchIcon />} />
				<BottomNavigationAction label="Settings" icon={<AccountCircleIcon />} />
			</BottomNavigation>
		</Box>
	);
};

export default BottomNav;