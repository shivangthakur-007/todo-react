import { useState } from "react";

function AddTodo({updatelist}){
    const [inputText, SetInputText]= useState('')
    return (
        <div>
            <input
            type="text"
            value={inputText} 
            placeholder="add your next todo.."
            onChange={e=> SetInputText(e.target.value)} />
            <button onClick={()=> updatelist()}>ADD</button>
        </div>
    )
}
export default AddTodo;