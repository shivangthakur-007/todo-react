import { useContext, useState } from 'react';
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/Todolist/Todolist'
import Todocontext from './Components/Context/Todocontext';
// import Todo from './Components/Todo/Todo';

function App() {
  const [list, setlist] =useState([
        {id: 1, tododata: 'Todo 1', finished: false},
        {id: 2, tododata: 'Todo 2', finished: false}
    ]);

  return (
    <Todocontext.Provider value={{list, setlist}}>  
    <AddTodo updatelist={((todo)=> setlist(
      [...list,   
       {id: list.length+1, tododata: todo, finished: false}]))}/>
    <Todolist list={list} updatelist={setlist}/>
    </Todocontext.Provider>
  )
}

export default App
