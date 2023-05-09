import './App.css';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

function App({ countState, clickState, dispatch }) {
  const dispatchAll = (num) => {
    dispatch(actionCreator(num));
    dispatch(clickCounter());
  };

  return (
    <div className="App">
      <h2>Contador</h2>
      <p>{countState}</p>
      <button onClick={() => dispatchAll()}>Incrementar 1</button>
      <button onClick={() => dispatchAll(5)}>Incrementar 5</button>
      <p>Você já clicou no botão {clickState} vezes</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clickState: state.clicks,
});

export default connect(mapStateToProps)(App);
