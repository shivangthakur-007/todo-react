import { useState } from "react";

function Todo({tododata, isfinished, changefinished, onDelete, onEdit}){
    const [finished, setfinished]= useState(isfinished)
    const [isEditing, SetEditing]= useState(false);
    const [editText, SetEditText]= useState(tododata);
    return (
        <div>
        <input type="checkbox" 
        checked={finished} 
        onChange={(e)=> 
            {setfinished(e.target.checked)
            changefinished(e.target.checked)
        }}/>
        {(isEditing)? <input type="text"
         value={editText}
          onChange={e=> SetEditText(e.target.value)}/>
          : <span>{tododata}</span>}
        <button onClick={()=>
             {SetEditing(!isEditing)
             onEdit(editText);
        }}> {(!isEditing)? 'Edit': 'Save'}</button>
        <button onClick={onDelete}>Delete</button>
        </div>  
    )
}
export default Todo;