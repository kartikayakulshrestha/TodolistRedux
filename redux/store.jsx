import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './counter/todoSlice'
export default configureStore({
  reducer: {
    todolist: todoReducer
  }
})