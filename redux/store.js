import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

const store = configureStore({
  reducer: rootReducer,
  // other optional configuration options
});
export default store;
