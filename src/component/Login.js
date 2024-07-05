// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your own CSS for the login page

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'pt' && password === 'p123') {
      navigate('/tutorial'); // Redirect to '/services' on successful login
    } else {
      setError('Invalid username or password,please contact the manager or service providers');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Please Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className={`far fa-eye${showPassword ? '-slash' : ''}`} onClick={togglePasswordVisibility}></i>
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
