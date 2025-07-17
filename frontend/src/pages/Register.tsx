import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import aaImage from '../aa.jpg';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });

      alert('Registered successfully!');
      navigate('/');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${aaImage})` }}
    >
      <nav className="register-navbar">
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎬 Movie App</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/')} className="nav-link">Login</span>
          <span onClick={() => navigate('/register')} className="nav-link">Register</span>
          <span onClick={() => navigate('/dashboard')} className="nav-link">Dashboard</span>
        </div>
      </nav>

      <div className="register-center-box">
        <div className="register-box">
          <h2 className="register-heading">🎬 Create Your Account</h2>
          <p className="register-subheading">Join Movie App and start streaming</p>

          {error && <p className="register-error">{error}</p>}

          <form onSubmit={handleRegister}>
            <div className="input-row">
              <div className="input-column">
                <label className="input-label">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="input-field"
                />
              </div>
              <div className="input-column">
                <label className="input-label">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
                className="input-field"
              />
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>

            <p className="register-bottom-text">
              Already have an account?{' '}
              <span onClick={() => navigate('/')} className="register-link">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
