import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // TODO: Implement authentication logic here
        // ... (for now, let's simulate successful login)

        console.log('Username:', username);
        console.log('Password:', password);

        // Assuming successful login:
        navigate('/HomePage');  // Redirect to the HomePage
    };
    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username"  
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>New User? <Link to="/SignupPage">Signup</Link></p>
        </div>
    );
};

export default LoginPage;
