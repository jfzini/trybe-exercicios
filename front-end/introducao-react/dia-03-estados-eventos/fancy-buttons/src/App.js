import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick1() {
    console.log('CLIQUE 1');
  }
  handleClick2() {
    console.log('CLIQUE 2');
  }
  handleClick3() {
    console.log('CLIQUE 3');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick1}>CLIQUE 1</button>
        <button onClick={this.handleClick2}>CLIQUE 2</button>
        <button onClick={this.handleClick3}>CLIQUE 3</button>
      </div>
    );
  }
}

export default App;
