// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <center><h1>Welcome to Food Ordering App</h1></center>
          <center>  <Link to="/LoginPage" className="link-button">Login</Link>
<Link to="/SignupPage" className="link-button">Signup</Link></center>


        </div>
    );
};

export default LandingPage;
