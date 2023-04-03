import React from 'react';
import './App.css';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class App extends React.Component {
  
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  }

  handleClick1 = async (event) => {
    await this.setState((prevState) => ({
      counter1: prevState.counter1 + 1,
    }));

    if (this.state.counter1 % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.className+'yellow';
    }
  }
  handleClick2 = async (event) => {
    await this.setState((prevState) => ({
      counter2: prevState.counter2 + 1,
    }))

    if (this.state.counter2 % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'yellow';
    }
  }
  handleClick3 = async (event) => {
    await this.setState((prevState) => ({
      counter3: prevState.counter3 + 1,
    }))

    if (this.state.counter3 % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'yellow';
    }
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
