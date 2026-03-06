import React, { useEffect, useState } from 'react'

const revision = () => {

const [user, setUser] = useState([]) 
useEffect (()  => {
   const result =async () => {
      const fetchData = await axios.get("https://fakestoreapi.com/products")
      setUser(fetchData.data)
   }
   result();
} ,[]) 
  return (
    <div>
        <h2>UserList</h2>
        {user.map((product) =>
        <>
        <p key = {product.id}>{product.name}</p>
        <p key = {product.id}>{product.age}</p>
        </>
        )}
      
    </div>
  )
}

export default revision
