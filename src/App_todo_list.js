import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const todo_onChange = (e) => {
    setTodo(e.target.value);
  };
  const add_onClick = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }
    setTodo("");
    setTodos((cur) => [todo, ...cur]);
  };

  console.log(todos);

  return (
    <div>
      <h1>My Todo({todos.length})</h1>
      <form>
        <input
          type="text"
          value={todo}
          onChange={todo_onChange}
          placeholder="enter your to do"
        />
        <button onClick={add_onClick}>Add</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
