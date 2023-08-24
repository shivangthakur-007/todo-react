import { useContext } from "react";
import Todo from "../Todo/Todo";
import Todocontext from "../Context/Todocontext";
import TodoDispatchContext from "../Context/TodoDispatchContext";

function Todolist(){
    const {list}= useContext(Todocontext)
    const {dispatch}= useContext(TodoDispatchContext)
    function onFinished(todo, isfinished){
        dispatch({type: 'finish_todo', payload: {todo, isfinished: isfinished}})
    }
    function onDelete (todo)
    {
      dispatch({type: 'delete_todo', payload: {todo}})
    };
    function onEdit(todo, todoText){
         dispatch({type: 'edit_todo', payload: {todo, todoText}})
    }
    return(
        <div>
            {list.length >0 &&
            list.map(todo =><Todo
                      key={todo.id} 
                     id={todo.id}   
                     isfinished={todo.finished} 
                     tododata={todo.tododata}
                     changefinished={(isfinished)=>
                    onFinished(todo, isfinished)}
                    onDelete={(isfinished)=> onDelete(todo, isfinished )}
                    onEdit={(todotext)=>{
                        onEdit(todo, todotext)
                         }}
                     />)}
        </div>
    )
}

export default Todolist;
