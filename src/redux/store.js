import { createStore } from 'redux';
import rootReducer from './rocketReducer';

const store = createStore(rootReducer);

export default store;
