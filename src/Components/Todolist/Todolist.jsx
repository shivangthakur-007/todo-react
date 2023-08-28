import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function Todolist(){
    const dispatch= useDispatch();
    const list= useSelector((state)=> state.todo);
    
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
