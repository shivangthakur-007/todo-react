import { useContext } from "react";
import Todo from "../Todo/Todo";
import Todocontext from "../Context/Todocontext";

function Todolist(){
    const {list, setlist}= useContext(Todocontext)
    return(
        <div>
            {list.length >0 &&
            list.map(todo =><Todo
                      key={todo.id} 
                     id={todo.id}   
                     isfinished={todo.finished} 
                     tododata={todo.tododata}
                     changefinished={(isfinished)=>{
                        const updatedlist =list.map(t=>{
                            if(t.id== todo.id){
                                todo.finished = isfinished;
                            }
                            return t;
                        })
                        setlist(updatedlist)
                        }}
                    onDelete={()=> {
                        const updatedlist= list.filter(t=> t.id !== todo.id)
                        setlist(updatedlist)
                    }}
                    onEdit={(todotext)=>{
                        const updatedlist= list.map(t=>{
                            if(t.id = todo.id){
                                todo.tododata= todotext
                            }
                        })
                        setlist(updatedlist)
                    }}
                     />)}
        </div>
    )
}

export default Todolist;
