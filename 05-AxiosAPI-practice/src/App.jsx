/*import { useState, useEffect } from 'react'

function App() {
  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  return(
    <ul>
      {
        users.map(user => (
          <li key = {user.id}>{user.name}</li>
        ))
      }
    </ul>
  );
}

export default App*/


/*Example 1 – Fetch Users List (Axios)

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;*/

/*Example 2 – Fetch Todos

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => setTodos(res.data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.slice(0, 10).map(todo => (
        <p key={todo.id}>
          {todo.title} - {todo.completed ? "✅" : "❌"}
        </p>
      ))}
    </div>
  );
}

export default App;*/

/*Example 3 – POST Data (Add User)

import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  const addUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", {
      name: name
    }).then(res => {
      console.log("User added:", res.data);
      alert("User Added Successfully");
    });
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;*/

/*Example 4 – Loading & Error Handling

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}

export default App;*/

/*Example 5 – Fetch Single User*/

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => setUser(res.data));
  }, []);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default App;

















