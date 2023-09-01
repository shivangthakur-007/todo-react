import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/Todolist/Todolist'
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, todoFinished } from './actions/todoAction';
import todoReducer, {addtodo, deletetodo, edittodo, todofinished} from './slices/todoSlices';

function App() {

  const dispatch= useDispatch();
  const actions= bindActionCreators({addTodo, deleteTodo, todoFinished, editTodo}, dispatch)
   return(
    <>
      <AddTodo addTodo={addTodo}/>
      <Todolist deleteTodo={deleteTodo} todoFinished={todoFinished} editTodo={editTodo}/>
    </>
   )
}

export default App
