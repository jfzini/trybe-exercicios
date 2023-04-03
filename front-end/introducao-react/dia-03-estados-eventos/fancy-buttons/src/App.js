import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  }

  handleClick1 = () => {
    this.setState((prevState, _props) => ({
      counter1: prevState.counter1 + 1,
    }))
  }
  handleClick2 = () => {
    this.setState((prevState, _props) => ({
      counter2: prevState.counter2 + 1,
    }))
  }
  handleClick3 = () => {
    this.setState((prevState, _props) => ({
      counter3: prevState.counter3 + 1,
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick1}>{this.state.counter1}</button>
        <button onClick={this.handleClick2}>{this.state.counter2}</button>
        <button onClick={this.handleClick3}>{this.state.counter3}</button>
      </div>
    );
  }
}

export default App;
