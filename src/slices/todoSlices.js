import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todo: []
}

const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action)=>{
            let todoText= action.payload.todoText;
            state.todo.push({id: state.todo.length +1, tododata: todoText, finished: false})
        },
        edittodo: (state, action)=>{
            let todo= action.payload.todo;
        let todoText= action.payload.todoText;
       const updatedList = state.map(t=> {
        if (t.id == todo.id) {
            todo.tododata= todoText;
        }
        return t;
       }) 
       return updatedList;
        },
        todofinished: (state, action)=>{
          let todo=action.payload.todo;
        let isfinished=action.payload.isfinished;
        state.todo = state.todo.map(t=> {
            if (t.id == todo.id) {
                todo.finished= isfinished;
            }
            return t;
        })
        }, 
        deletetodo: (state, action)=>{
            let todo= action.payload.todo;
            state.todo= state.todo.filter(t=> t.id !== todo.id)
        }
    }
});

export const {deletetodo, addtodo, edittodo, todofinished}= todoSlice.actions;

export default todoSlice.reducer;   