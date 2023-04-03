import React from 'react';
import './App.css';


function handleClick1() {
   console.log('CLIQUE 1');
}
function handleClick2() {
   console.log('CLIQUE 2');
}
function handleClick3() {
   console.log('CLIQUE 3');
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={handleClick1}>CLIQUE 1</button>
        <button onClick={handleClick2}>CLIQUE 2</button>
        <button onClick={handleClick3}>CLIQUE 3</button>
      </div>
    );
  }
}

export default App;
