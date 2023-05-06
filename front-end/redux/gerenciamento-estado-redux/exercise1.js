import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'gray', 'red', 'green', 'blue', 'yellow'],
  index: 0,
  selectedColor: 'white',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const body = document.querySelector('body');
const colorSpan = document.querySelector('#value');

prevBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

nextBtn.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

store.subscribe(() => {
  const globalState = store.getState();
  const {colors, index} = globalState;
  body.style.backgroundColor = colors[index];
  colorSpan.innerHTML = colors[index];
});
