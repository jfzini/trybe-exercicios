import './App.css';
import { connect } from 'react-redux';

function App({ countState }) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <p>{countState}</p>
      <button>Incrementar 1</button>
      <button>Incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
