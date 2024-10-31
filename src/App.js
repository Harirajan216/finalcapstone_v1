import React from 'react';
import logo from './logo.svg'; // Ensure the React logo is in the src folder
import './App.css'; // Optional: You can include CSS for styling

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to My React App!</h1>
      <p>This is a simple React application using the React logo.</p>
    </div>
  );
}

export default App;
