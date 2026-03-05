import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([]);
  useEffect (()=> {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData(result?.data)
      console.log(result)
    }
    fetchData();
  },[])
  return (
    <div>
      <h2>UserList</h2>
      {data.map((user)=>(

      <>

      <p key = {user.name}>{user.name}</p>
      <p key = {user.email}>{user.email}</p>
      
      
      
      </>



      ))}
      
      
    </div>
  )
}

export default App
