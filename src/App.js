import React from "react";
import "./App.css";
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

function App() {
  return (
    <div >

    <ThirdwebProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
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
    </div>
  );
}

export default App;