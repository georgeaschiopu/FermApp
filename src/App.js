import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>Welcome to Farmers-Customers Platform</h1>
        <p>Hello, {user.email} ({user.role})! You are logged in.</p>
      </header>
      {/* Add more features or navigation here */}
    </div>
  );
}

export default App;
