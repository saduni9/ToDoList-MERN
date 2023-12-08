import React, { useState, useEffect } from "react";
import Create from "./Create";
import "./App.css";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0
        ?
        <div className="no-record">
          <h2>No Record</h2>
        </div>
        :
        todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo.task}
          </div>
        ))
      }
    </div>
  );
}

export default Home;

