import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import aaImage from '../aa.jpg';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${aaImage})` }}
    >
      <nav className="login-navbar">
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎬 Movie App</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/')} className="nav-link">Login</span>
          <span onClick={() => navigate('/register')} className="nav-link">Register</span>
          <span onClick={() => navigate('/dashboard')} className="nav-link">Dashboard</span>
        </div>
      </nav>

      <div className="login-center-box">
        <div className="login-box">
          <h2 className="login-heading">🎬 Login to Movie App</h2>
          <p className="login-subheading">Welcome back! Please login to continue.</p>

          {error && <p className="login-error">{error}</p>}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label className="login-label">Email</label>
              <input
                type="email"
                placeholder="fizza@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label className="login-label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>

            <button type="submit" className="login-button">Login</button>

            <p className="login-bottom-text">
              Don’t have an account?{' '}
              <span onClick={() => navigate('/register')} className="login-link">
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
