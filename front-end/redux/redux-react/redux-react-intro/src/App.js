import './App.css';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

function App({ countState, dispatch }) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <p>{countState}</p>
      <button onClick={dispatch(actionCreator())}>Incrementar 1</button>
      <button onClick={dispatch(actionCreator(5))}>Incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
