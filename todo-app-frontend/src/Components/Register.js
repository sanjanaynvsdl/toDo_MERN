import React, { useState } from 'react';
import axios from '../calls/axiosInstance';
import { Link } from 'react-router-dom';
// import login from './Login'
import './Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { name, email, password });
      alert('Registration successful!');
    } catch (error) {
    console.error(error); 
      console.error('Registration failed:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        autoComplete="new-password"
        />

        <button type="submit">Register</button>
        
      </form>
      <div className="link-container">
        <p>Already Registered? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default Register;
