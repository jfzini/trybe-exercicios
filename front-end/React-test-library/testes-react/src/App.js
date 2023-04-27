// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  const [showName, setShowName] = useState(false)

  const handleClick = () => {
    setShowName(!showName)
  }

  const handleChange = ({target}) => {
    const value = target.value;
    setUserName(value);
  }

  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <label htmlFor="id-name">
        Nome
        <input id="id-name" type="text" data-testid="id-name" value={userName} onChange={handleChange}/>
      </label>
      <button onClick={handleClick} data-testid="render-button">Enviar</button>
      {showName && <p data-testid="username-p">{userName}</p>}
    </div>
  );
}

export default App;
