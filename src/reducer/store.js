import {store} from 'redux';
import {increment} from './increment';

const reducers = combineReducers({
    increment: increment,
    decrement: decrement
})


