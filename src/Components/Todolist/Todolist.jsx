import { useState } from "react";
import Todo from "../Todo/Todo";

function Todolist({list}){
    
    return(
        <div>
            {list.length >0 && list.map(Todo =><Todo key={Todo.id} tododata={Todo.tododata}/>) }
        </div>
    )
}

export default Todolist;