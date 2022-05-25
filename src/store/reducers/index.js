import {combineReducers} from 'redux';
// import all reducer in project
import AppReducer from 'modules/App/reducers';

const rootReducer = combineReducers({
  app: AppReducer,
})

export default rootReducer;