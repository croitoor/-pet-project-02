import { createStore, compose, applyMiddleware } from 'redux'; /* combineReducers -объединение редюсоров */
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEhancers(applyMiddleware(thunk))
);

export default store;