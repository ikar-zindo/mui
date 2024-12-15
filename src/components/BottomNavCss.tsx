import React, {useState} from 'react';
import HomeIcon from "@mui/icons-material/Home";
import style from "./BottomNav.module.css"
import {useNavigate} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BottomNavCss:React.FC = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate(); // Хук для навигации между страницами

	const handleNavigation = (newValue: number) => {
		setValue(newValue);
		if (newValue === 0) navigate("/");
		if (newValue === 1) navigate("/search");
		if (newValue === 2) navigate("/settings");
	};


	return (
		<div className={style.bottomNav}>
			<div className={`nav-button ${value === 0 ? "active" : ""}`} onClick={() => handleNavigation(0)}>
				<HomeIcon/>
				<div>Home</div>
			</div>

			<div className={`nav-button ${value === 0 ? "active" : ""}`} onClick={() => handleNavigation(0)}>
				<SearchIcon/>
				<div>Search</div>
			</div>

			<div className={`nav-button ${value === 0 ? "active" : ""}`} onClick={() => handleNavigation(0)}>
				<AccountCircleIcon/>
				<div>Profile</div>
			</div>
		</div>

	);
};

export default BottomNavCss;