// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <label htmlFor="id-name">
        Nome
        <input id="id-name" type="text" />
      </label>
    </div>
  );
}

export default App;
