import periodReducer from './periodReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    period : periodReducer
});

export default allReducers;