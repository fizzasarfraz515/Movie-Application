import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import aaImage from '../aa.jpg'; // Adjust the path if needed

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
      style={{
        backgroundImage: `url(${aaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* 🔝 Top Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎬 Movie App</h1>
        <div style={{ display: 'flex', gap: '25px', fontSize: '18px' }}>
          <span onClick={() => navigate('/')} style={navLinkStyle}>Login</span>
          <span onClick={() => navigate('/register')} style={navLinkStyle}>Register</span>
          <span onClick={() => navigate('/dashboard')} style={navLinkStyle}>Dashboard</span>
        </div>
      </nav>

      {/* 🎯 Centered Login Box */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          paddingTop: '80px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            padding: '40px',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '400px',
            color: '#fff',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.4)',
          }}
        >
          <h2 style={headingStyle}>🎬 Login to Movie App</h2>
          <p style={subheadingStyle}>Welcome back! Please login to continue.</p>

          {error && <p style={errorStyle}>{error}</p>}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="fizza@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <button type="submit" style={loginBtnStyle}>
              Login
            </button>

            <p style={bottomTextStyle}>
              Don’t have an account?{' '}
              <span
                onClick={() => navigate('/register')}
                style={linkStyle}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// 🔧 Styles
const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#fff',
};

const headingStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '8px',
  fontSize: '26px',
  fontWeight: 'bold',
};

const subheadingStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#bbb',
  fontSize: '15px',
  marginBottom: '25px',
};

const errorStyle: React.CSSProperties = {
  color: 'red',
  textAlign: 'center',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '15px',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#ddd',
};

const loginBtnStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  backgroundColor: 'red',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '6px',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
};

const bottomTextStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '18px',
  fontSize: '14px',
  color: '#aaa',
};

const linkStyle: React.CSSProperties = {
  color: 'red',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Login;
