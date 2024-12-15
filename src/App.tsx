import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarProvider } from "notistack";

import Home from "./pages/home";
import Play from "./pages/Play";
import Game from "./pages/game";
import Leaderboard from "./pages/Leaderboard";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import React from "react";
// import './globals.css';
import OnchainProviders from './OnchainProviders'; 



const Basepay = () => {
  React.useEffect(() => {
    window.open('', '_blank');
    // Optionally navigate back to home page
    window.location.href = '/';
  }, []);
  
  return null; // or return a loading spinner if needed
};


const Yield = () => {
  React.useEffect(() => {
    window.open('', '_blank');
    // Optionally navigate back to home page
    window.location.href = '/';
  }, []);
  
  return null; // or return a loading spinner if needed
};



const BobhubID = () => {
  React.useEffect(() => {
    window.open('https://bob-id-verify.vercel.app', '_blank');
    // Optionally navigate back to home page
    window.location.href = '/';
  }, []);
  
  return null; // or return a loading spinner if needed
};


const Bobhubveri = () => {
  React.useEffect(() => {
    window.open('', '_blank');
    // Optionally navigate back to home page
    window.location.href = '/';
  }, []);
  
  return null; // or return a loading spinner if needed
};

const Bobhubagri = () => {
  React.useEffect(() => {
    window.open('', '_blank');
    // Optionally navigate back to home page
    window.location.href = '/';
  }, []);
  
  return null; // or return a loading spinner if needed
};


function App() {

  
    return (
      <>
            <OnchainProviders>
            <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/play" element={<Play />} />
            <Route path="/needy" element={<Bobhubveri />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/verify" element={<BobhubID />} />
            <Route path="/Bobhubagri" element={<Bobhubagri />} />
            <Route path="/yield" element={<Yield />} />
            <Route path="/basepay" element={<Basepay />} />
          </Routes>
        </Router>
          <ToastContainer autoClose={3000} draggableDirection="x" />
        </OnchainProviders>
  
      </>
    );
  }
  
  export default App;
