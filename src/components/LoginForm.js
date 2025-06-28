import React, { useState } from 'react';

function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
        setIsLoggedIn(true)

  };

  return (
    <div>
 {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          title='name'
          required
        />
      </div>
      <br />
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </form>)}
    </div>
  );
}

export default LoginForm;
