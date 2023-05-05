import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = { count: 0 };
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return { count: state.count + 1 };
    default:
      break;
  }
  return state;
};
const store = createStore(reducer, composeWithDevTools());
const action = { type: 'INC_COUNTER' };

const incBtn = document.querySelector('button');
incBtn.addEventListener('click', () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();
  const incText = document.querySelector('h2');
  incText.innerHTML = globalState.count;
});

// const incBtn = document.querySelector('button');
// const incText = document.querySelector('h2');

// incBtn.addEventListener('click', () => {
//   incText.innerHTML = Number(incText.innerHTML) + 1;
// });
