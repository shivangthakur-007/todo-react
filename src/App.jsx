import {useReducer, useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/Todolist/Todolist'
import Todocontext from './Components/Context/Todocontext';
import todoReducer from './Reducer/todoReducer';
import TodoDispatchContext from './Components/Context/TodoDispatchContext';

function App() {
  
  const [list, dispatch]= useReducer(todoReducer, []);

  return (
    <Todocontext.Provider value={{list}}> 
      <TodoDispatchContext.Provider value={{dispatch}}> 
      <AddTodo />
      <Todolist />
    </TodoDispatchContext.Provider>
    </Todocontext.Provider>
  )
}

export default App
