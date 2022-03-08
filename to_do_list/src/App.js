import React, {useState} from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log("Page Load:",todos);

  const handleInput = (event) => {
    event.preventDefault();
    if(newTodo.length == 0){
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    };
    // console.log("handleInput(): user input:",newTodo);
    setTodos([... todos, todoItem])
    setNewTodo("");
  };

  const handleDelete = (idx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== idx;
    })
    setTodos(filteredTodos);
  };

  const toggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx == i){
        todo.complete = !todo.complete;
        // const updatedTodo = { ... todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleInput(event);
      }}>
        <input onChange={(event ) => {
          setNewTodo(event.target.value);
        }} 
        type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr/>
      {todos.map((todo, i) => {
        const todoClass = ["bold"];
        if (todo.complete){
          todoClass.push("strike");
        }
        return (
        <div key={i}>
          <input onChange={(event) => {
            toggleComplete(i);
          }} checked={todo.complete} type="checkbox"/>
          <span className={todoClass.join(" ")}> {todo.text}</span>
          <button onClick = {(event) => {
            handleDelete(i);
          }}
          style={{marginLeft:"10px"}}>Delete</button>
        </div>
        );
      })}
    </div>
  );
}

export default App;
