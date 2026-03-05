import React, { useState } from 'react'

const App = () => {
  const[num, setNum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(prev => prev+1)}>Increae</button>
      <button onClick={() => setNum(prev => prev-1)}>Decrease</button>
    </div>
  )
}

export default App
