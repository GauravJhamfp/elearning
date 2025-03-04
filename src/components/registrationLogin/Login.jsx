import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    alert('You have been logged out.');
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset any previous error messages

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/login', {
        email: email.trim(),
        password: password.trim(),
      });

      // Successful login
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      setLoggedIn(true); // Update logged-in state
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data.error) {
        setErrorMessage(error.response.data.error); // Show backend error
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Styles
  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const inputContainerStyle = {
    position: 'relative',
    marginBottom: '15px',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: loading ? '#ccc' : '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  };

  const togglePasswordStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const linkStyle = {
    textAlign: 'center',
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    marginBottom: '15px',
  };



  return (
    <div style={containerStyle}>
      {!loggedIn ? (
        <>
          <h2 style={titleStyle}>Login</h2>
          {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <div style={inputContainerStyle}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                style={togglePasswordStyle}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p style={linkStyle}>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={titleStyle}>You are logged in</h2>
          <button onClick={handleLogout} style={buttonStyle}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
