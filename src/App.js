import React, { useState } from "react";
// import "./App.css";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import { ThirdwebProvider } from "thirdweb/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/pages/Profile";
import Loading from "./components/pages/Loader";
import Partners from "./components/pages/Partner";
import Properties from "./components/pages/Properties";
import Footer from "./components/pages/Footer";
import AboutUs from "./components/pages/AboutUs";
import Join from "./components/pages/Join";
import Developers from "./components/pages/Developers";
import { darkTheme,lightTheme } from "./utils/theme";
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div >
 {/* <ThemeProvider theme={theme}> */}
 <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <ThirdwebProvider>
      <BrowserRouter>
        <ResponsiveAppBar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        <Loading/>
        <Partners/>
        <Properties/>
        <AboutUs/>
        <Developers/>
        <Join/>
        <Footer/>
        <Routes>
          {/* <Route path="/" element={<ProfilePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
 </ThemeProvider>
    </div>
  );
}

export default App;