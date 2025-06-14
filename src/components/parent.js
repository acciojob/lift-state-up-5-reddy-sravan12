import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default Parent;
