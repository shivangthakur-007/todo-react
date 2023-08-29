import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function Todolist({editTodo, deleteTodo, todoFinished}){
    const list= useSelector((state)=> state.todo);
    
    function onFinished(todo, isfinished){
        todoFinished(todo, isfinished)
    }
    function onDelete (todo)
    {
      deleteTodo(todo)
    };
    function onEdit(todo, todoText){
         editTodo(todo, todoText)
    }
    return(
        <div>
            {list.length >0 &&
            list.map(todo => <Todo
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
