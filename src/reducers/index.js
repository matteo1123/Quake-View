import periodReducer from './periodReducer';
import magReducer from './magReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    period  : periodReducer,
    mag     : magReducer
});

export default allReducers;