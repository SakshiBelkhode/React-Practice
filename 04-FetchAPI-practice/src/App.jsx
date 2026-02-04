import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [topUsers, setTopUsers] = useState([]);
  const [oneTodo, setOneTodo] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")/*Fetch Users and display names*/
      .then(res => res.json())
      .then(data => setUsers(data));
    
      fetch("https://jsonplaceholder.typicode.com/posts")/*Fetch posts and count them*/
      .then(res => res.json())
      .then(data => setPostCount(data.length));
    
      fetch("https://jsonplaceholder.typicode.com/users")/*Show only First 5 Users*/
      .then(res => res.json())
      .then(data => setTopUsers(data.slice(0,5)));

      fetch("https://jsonplaceholder.typicode.com/todos")/*Fetch ToDos and show Completed*/
      .then(res => res.json())
      .then(data => console.log(data.filter(t => t.completed)));

  }, []);

  return (
    <>
      <h1>Fetch API Practice</h1>
      <h2>Total Posts: {postCount}</h2>
      <h2>First 5 Users</h2>
      <h2>Completed</h2>
      


      {users.map(user => (
        <p key={user.id}>{user.name}</p>
       
       
      ))}
    </>
  );
}

export default App;
  