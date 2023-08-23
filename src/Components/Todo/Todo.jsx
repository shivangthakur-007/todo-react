import { useState } from "react";

function Todo({tododata, isfinished, changefinished}){
    const [finished, setfinished]= useState(isfinished)
    return (
        <div>
        <input type="checkbox" 
        checked={finished} 
        onChange={(e)=> 
            {setfinished(e.target.checked)
            changefinished(e.target.checked)
        }}/>
        {tododata}
        <button>Edit</button>
        <button>Delete</button>
        </div>  
    )
}
export default Todo;