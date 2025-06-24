import React, { useState } from 'react';
import './style.css'; 

function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
      />
      <button className="login-button">Login</button>
    </div>
  );
}

export default LoginPage;
