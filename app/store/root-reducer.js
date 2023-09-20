import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/todo-slice';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
