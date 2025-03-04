import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Phone number validation (optional, adjust regex as needed)
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage('Please enter a valid phone number (10 digits)');
      return;
    }

    try {
      setLoading(true); // Set loading state
      const response = await axios.post('http://localhost:5000/api/registration', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        alert('Registration Successful!');
        navigate('/login');
      } else {
        setErrorMessage('Registration Failed: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during registration. Please try again.');
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  const formStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#dfe7f2',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputContainerStyle = {
    position: 'relative',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: loading ? '#ccc' : '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: loading ? 'not-allowed' : 'pointer',
  };

  const togglePasswordStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
        Student Registration Form
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#555' }}>
        Fill out the form carefully for registration.
      </p>

      {errorMessage && <div style={errorStyle}>{errorMessage}</div>}

      <div>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <select
          style={inputStyle}
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          style={togglePasswordStyle}
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>

      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          style={togglePasswordStyle}
        >
          {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>

      <div>
        <input
          style={inputStyle}
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="state"
          placeholder="State / Province"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <button style={buttonStyle} type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}

export default Registration;
