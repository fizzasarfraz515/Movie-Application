// src/pages/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import aaImage from '../aa.jpg'; // ✅ Ensure image path is correct

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ Hook initialization

  return (
    <div
      style={{
        backgroundImage: `url(${aaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        color: 'white',
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
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎬 Movie App</h1>
        <div style={{ display: 'flex', gap: '25px', fontSize: '18px' }}>
          <span onClick={() => navigate('/')} style={navLinkStyle}>Login</span>
          <span onClick={() => navigate('/register')} style={navLinkStyle}>Register</span>
          <span onClick={() => navigate('/dashboard')} style={navLinkStyle}>Dashboard</span>
        </div>
      </nav>

      {/* ✅ Centered Dashboard Box */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '40px',
            borderRadius: '12px',
            color: '#fff',
            textAlign: 'center',
            maxWidth: '600px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#ff4757' }}>
            Welcome to the Dashboard 🎬
          </h2>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
            You are now logged in. Enjoy exploring your movie world! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

// 🔗 Navigation link style
const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#fff',
  textDecoration: 'none',
};

export default Dashboard;
