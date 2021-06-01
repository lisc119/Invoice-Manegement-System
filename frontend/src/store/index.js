import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import filterReducer from './reducers/filterReducer';
import subWindowReducer from './reducers/subWindowReducer';
import thunk from 'redux-thunk';
import { tagReducer } from './reducers/tagReducer';

const reducer = combineReducers({
    user: authReducer,
    filter: filterReducer,
    subWindow: subWindowReducer,
    tag: tagReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
