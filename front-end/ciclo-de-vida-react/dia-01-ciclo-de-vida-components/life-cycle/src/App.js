// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
    }

    fetchData = async () => {
      const fetchedData = await fetch('https://rickandmortyapi.com/api/character');
      const parsedData = await fetchedData.json();
      const results = parsedData.results;
      this.setState({
        characters: results,
      })
    }
    
    componentDidMount() {
      this.fetchData();
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;
