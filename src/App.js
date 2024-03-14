import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage'; // Import LandingPage

import './styles.css';



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container"> 
        <Header /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/SignupPage" element={<SignupPage />} /> 
          <Route path="/HomePage" element={<HomePage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
