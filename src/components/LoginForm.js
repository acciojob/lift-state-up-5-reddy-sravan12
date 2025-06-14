import React, { useState } from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would validate credentials here
    if (username && password) {
      onLogin(); // Call parent function to update state
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
