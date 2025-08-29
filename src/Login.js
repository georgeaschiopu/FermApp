import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simulate login success by returning form data
    onLogin({ email, role });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '6px 0' }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '6px 0' }}
          />
        </label>
        <label>
          I am a:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ display: 'block', padding: '8px', margin: '6px 0' }}
          >
            <option value="buyer">Buyer</option>
            <option value="farmer">Farmer</option>
          </select>
        </label>
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
