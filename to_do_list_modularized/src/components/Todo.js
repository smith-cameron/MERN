const Todo = (props) => {
    const todoClass = ["bold"];
        if (props.todo.complete){
            todoClass.push("strike");
        }
    return (
    <div>
        <input onChange={(event) => {
            props.toggleComplete(props.i);
        }} checked={props.todo.complete} type="checkbox"/>
        <span className={todoClass.join(" ")}> {props.todo.text}</span>
        <button onClick = {(event) => {
            props.handleDelete(props.i);
        }}
        style={{marginLeft:"10px"}}>Delete</button>
    </div>
    )};

export default Todo;