import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/Todolist/Todolist'
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, todoFinished } from './actions/todoAction';

function App() {
  const dispatch= useDispatch();
  const actions= bindActionCreators({addTodo, deleteTodo, todoFinished, editTodo}, dispatch)
   return( <>
      <AddTodo addTodo={actions.addTodo}/>
      <Todolist deleteTodo={actions.deleteTodo} todoFinished={actions.todoFinished} editTodo={actions.editTodo}/>
      </>
   )
}

export default App
