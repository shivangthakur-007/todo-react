import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/todoAction";

function AddTodo(){
    const dispatch = useDispatch();
    const [inputText, SetInputText]= useState('');
    return (
        <div>
            <input
            type="text"
            value={inputText} 
            placeholder="add your next todo.."
            onChange={e=> SetInputText(e.target.value)} />
            <button onClick={()=>{
                dispatch(addTodo)
                SetInputText('')
            }}>ADD</button>
        </div>
    )
}
export default AddTodo;