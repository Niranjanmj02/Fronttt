import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container"> {/* Container for layout */}
        <Header /> 
        <Routes>
          <Route path="/HomePage" element={<HomePage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;