import {todo_Finished, delete_Todo,add_Todo, edit_Todo} from '../constants/action'
export const todoFinished= (todo, isFinished)=> ({type: todo_Finished, payload: {todo, isFinished: isFinished}})

export const addTodo= (inputText)=> ({type: add_Todo, payload: {todoText: inputText}})

export const deleteTodo= (todo)=> ({type: delete_Todo, payload: {todo}})

export const editTodo=(todo, todoText )=> ({type: edit_Todo, payload: {todo, todoText}})

