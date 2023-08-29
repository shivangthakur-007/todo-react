import { useState } from "react";
import { addTodo } from "../../actions/todoAction";

function AddTodo({addTodo}){

    const [inputText, SetInputText]= useState('');
    return (
        <div>
            <input
            type="text"
            value={inputText} 
            placeholder="add your next todo.."
            onChange={e=> SetInputText(e.target.value)} />
            <button onClick={()=>{
            addTodo(inputText)
                SetInputText('')
            }}>ADD</button>
        </div>
    )
}
export default AddTodo;