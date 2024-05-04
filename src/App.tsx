import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  // const { theme, setTheme } = useContext(ThemeContext);

  // const toggleTheme = () =>
  //   setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <Link to="/">To Main</Link>
      <Link to="/about">To About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
