import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to My App</h1>
      <p>Railey Tiglao</p>
      <p>CS - 401</p>
      <button
        className="landing-button"
        onClick={() => navigate('/login')}
      >
        Go to Login
      </button>
    </div>
  );
}

export default LandingPage;
