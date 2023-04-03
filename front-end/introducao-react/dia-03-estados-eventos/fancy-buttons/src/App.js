import React from 'react';
import './App.css';

class App extends React.Component {

  handleClick1 = () => {
    console.log(this);
  }
  handleClick2 = () => {
    console.log(this);
  }
  handleClick3 = () => {
    console.log(this);
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
