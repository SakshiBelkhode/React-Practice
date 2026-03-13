import React, { useState } from 'react'

const counter = () => {
    const[Count, setCount] = useState(0)
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={() => setCount(Count + 1)}>Increase</button>
      <button onClick={() => setCount(Count - 1)}>Decrease</button>
    </div>
  )
}

export default counter
