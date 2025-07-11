import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import aaImage from '../aa.jpg';

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
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎬 Movie App</h1>
        <div style={{ display: 'flex', gap: '25px', fontSize: '18px' }}>
          <span onClick={() => navigate('/')} style={navLinkStyle}>Login</span>
          <span onClick={() => navigate('/register')} style={navLinkStyle}>Register</span>
          <span onClick={() => navigate('/dashboard')} style={navLinkStyle}>Dashboard</span>
        </div>
      </nav>

      {/* 🎯 Form Card Centered */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150vh',
          paddingTop: '60px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: '50px',
            borderRadius: '12px',
            width: '200%',
            maxWidth: '500px',
            color: '#fff',
            boxShadow: '0px 0px 25px rgba(255, 0, 0, 0.5)',
          }}
        >
          <h2 style={headingStyle}>🎬 Create Your Account</h2>
          <p style={subheadingStyle}>Join Movie App and start streaming</p>

          {error && <p style={errorStyle}>{error}</p>}

          <form onSubmit={handleRegister}>
            {/* <div style={inputGroup}>
              <label style={labelStyle}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                style={inputStyle}
              />
            </div> */
            <div style={{ display: 'flex', gap: '24px', marginBottom: '18px' }}>
  {/* First Name - now comes first */}
  <div style={{ flex: 1 }}>
    <label style={labelStyle}>First Name</label>
    <input
      type="text"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="First Name"
      required
      style={inputStyle}
    />
  </div>

  {/* Last Name - now comes second */}
  <div style={{ flex: 1 }}>
    <label style={labelStyle}>Last Name</label>
    <input
      type="text"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="Last Name"
      required
      style={inputStyle}
    />
  </div>
</div>
}

            <div style={inputGroup}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
                style={inputStyle}
              />
            </div>

            <button type="submit" style={registerBtnStyle}>
              Register
            </button>

            <p style={bottomTextStyle}>
              Already have an account?{' '}
              <span
                onClick={() => navigate('/')}
                style={linkStyle}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// 🔧 Styles
const headingStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '8px',
  fontSize: '28px',
  fontWeight: 'bold',
};

const subheadingStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#bbb',
  fontSize: '16px',
  marginBottom: '25px',
};

const errorStyle: React.CSSProperties = {
  color: 'red',
  textAlign: 'center',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const inputGroup: React.CSSProperties = {
  marginBottom: '18px',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ddd',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '16px',
};

const registerBtnStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  backgroundColor: 'red',
  color: '#fff',
  borderRadius: '6px',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
  cursor: 'pointer',
  marginTop: '10px',
};

const bottomTextStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '18px',
  fontSize: '15px',
  color: '#aaa',
};

const linkStyle: React.CSSProperties = {
  color: 'red',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#fff',
};

export default Register;
