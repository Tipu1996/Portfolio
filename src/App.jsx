import { lightThemeOptions, darkThemeOptions } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer";

const App = () => {
	const [theme, setTheme] = useState("dark");

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeProvider
			theme={theme === "light" ? lightThemeOptions : darkThemeOptions}
		>
			<CssBaseline />
			<Header theme={theme} changeTheme={changeTheme} />
			<Intro />
			<AboutMe />
			<Projects />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
