import { useContext, useState } from "react";
import TodoDispatchContext from "../Context/TodoDispatchContext";

function AddTodo(){
    const [inputText, SetInputText]= useState('');
    const {dispatch}= useContext(TodoDispatchContext);
    return (
        <div>
            <input
            type="text"
            value={inputText} 
            placeholder="add your next todo.."
            onChange={e=> SetInputText(e.target.value)} />
            <button onClick={()=>
                {dispatch({type: 'add_todo', payload: {todoText: inputText}})
                SetInputText('')
            }} >ADD</button>
        </div>
    )
}
export default AddTodo;