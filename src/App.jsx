import {useReducer, useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/Todolist/Todolist'
import todoReducer from './Reducer/todoReducer';

function App() {
  
  const [list, dispatch]= useReducer(todoReducer, []);
    <>
      <AddTodo />
      <Todolist />

      </>
}

export default App
