export const todoFinished= (todo, isFinished)=> ({type: 'finish_todo', payload: {todo, isFinished: isFinished}})

export const addTodo= (inputText)=> ({type: 'add_todo', payload: {todoText: inputText}})

export const deleteTodo= (todo)=> ({type: 'delete_todo', payload: {todo}})

export const editTodo=(todo, )=> ({type: 'edit_todo', payload: {todo, todoText}})

