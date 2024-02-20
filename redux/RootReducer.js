import { combineReducers } from 'redux';
import sidebarReducer from './sidebareReducer';

const rootReducer = combineReducers({
  sidebar : sidebarReducer,
  
});

export default rootReducer;
