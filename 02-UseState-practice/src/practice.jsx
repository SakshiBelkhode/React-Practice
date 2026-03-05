import React, { useEffect, useState } from 'react'

const practice = () => {

  const [data, setData ] = useState([])
  useEffect ( () => {
    const result = () => {
        const fetchData = axios.get("")
        setData (fetchData.data)
    }
    result();
  },[]);
  return (
    <div>
        <h2>UseNames</h2>
        {data.map((user)=> (

           <>
              <p key = {user.id}>{user.name}</p>
              <p key = {user.id}>{user.age}</p>
           
           </> 
           
        ))}
      
    </div>
  )
}

export default practice
