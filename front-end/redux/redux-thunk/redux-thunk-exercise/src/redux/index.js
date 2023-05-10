import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { dogReducer } from './reducers';

const store = createStore(dogReducer, composeWithDevTools(thunk));

export default store;
