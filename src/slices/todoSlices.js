import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todo: []
}

const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            let todoText= action.payload.todoText;
            state.todo.push({id: state.todo.length +1, tododata: todoText, finished: false})
        },
        editTodo: (state, action)=>{
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
        todoFinished: (state, action)=>{
          let todo=action.payload.todo;
        let isfinished=action.payload.isfinished;
        state.todo = state.todo.map(t=> {
            if (t.id == todo.id) {
                todo.finished= isfinished;
            }
            return t;
        })
        }, 
        deleteTodo: (state, action)=>{
            let todo= action.payload.todo;
            state.todo= state.todo.filter(t=> t.id !== todo.id)
        }
    }
});

export const {deleteTodo, addTodo, editTodo, todoFinished}= todoSlice.actions;

export default todoSlice.reducer;   