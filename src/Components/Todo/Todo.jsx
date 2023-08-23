function Todo({tododata}){
    return (
        <div>
        <input type="checkbox" />
        {tododata}
        <button>Edit</button>
        <button>Delete</button>
        </div>
    )
}
export default Todo;