import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>Welcome to Farmers-Customers Platform</h1>
        <p>Connecting farmers directly with customers for fresh and sustainable produce.</p>
      </header>
      <main>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Browse and adopt crops or livestock</li>
            <li>Subscribe to weekly produce boxes</li>
            <li>Track your orders transparently</li>
            <li>Real-time farm updates and notifications</li>
          </ul>
        </section>
      </main>
      <footer style={{ marginTop: '40px', fontSize: '0.9em', color: '#555'}}>
        <p>© 2025 Farmers Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
