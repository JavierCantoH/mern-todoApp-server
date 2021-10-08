// to be able to combine reducers
import { combineReducers } from 'redux';
// reducers imported
import todoReducer from './todoReducer';

const rootReducer = combineReducers({ 
    todos: todoReducer
})

export default rootReducer;