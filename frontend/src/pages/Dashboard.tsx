import React from 'react';
import { useNavigate } from 'react-router-dom';
import aaImage from '../aa.jpg';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${aaImage})` }}
    >
      <nav className="dashboard-navbar">
        <h1 className="dashboard-title">🎬 Movie App</h1>
        <div className="nav-links">
          <span onClick={() => navigate('/')} className="nav-link">Login</span>
          <span onClick={() => navigate('/register')} className="nav-link">Register</span>
          <span onClick={() => navigate('/dashboard')} className="nav-link">Dashboard</span>
        </div>
      </nav>

      <div className="dashboard-center-box">
        <div className="dashboard-box">
          <h2 className="dashboard-heading">Welcome to the Dashboard 🎬</h2>
          <p className="dashboard-message">
            You are now logged in. Enjoy exploring your movie world! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
