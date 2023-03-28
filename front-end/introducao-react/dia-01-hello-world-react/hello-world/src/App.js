import React, {Component} from 'react';
import About from './About';

class App extends Component {
  render() {
    const textJSX = 'Hello, JSX';
    const element = <h1>{textJSX}</h1>;
    return (
      <div>
        <h1>{textJSX}</h1>
        <About />
      </div>
    );
  }
}

export default App;
