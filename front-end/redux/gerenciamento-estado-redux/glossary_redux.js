import { createStore } from 'redux';

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//reducer
const reducer = (state, action) => state;

//actions
const action = {
  type: 'INCREMENT_COUNTER', //type é a ação que será enviada para o reducer alterar o estado
};

//dispatch
dispatch({ type: 'INCREMENT_COUNTER' });
// para enviar para o reducer é necessário passar a action como argumento para o dispatch

// getState()
const state = store.getState(); // retorna o estado global

// subscribe()
store.subscribe(() => {
  console.log(`O novo estado global é ${store.getState}`);
});
