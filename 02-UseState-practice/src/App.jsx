/*Counter Practice*/

import { useState } from 'react'

function App (){
  const [count , setCount] = useState(0);
  const [name, setName] = useState("");  /*Input Box*/
  const [show, setShow] = useState(true); /*Show Hide text*/
  const [color, setColor] = useState("red"); /*Change Color*/
  const [liked, setLiked] = useState(false); /*Like Button*/

 
return(
  <>
   <h1>{count}</h1> 
   <button onClick = {() => setCount (count + 1)}>+</button> 

   <input onChange={e => setName(e.target.value)} />
   <h1>{name}</h1>

   <button onClick={ () => setShow(!show)}Toggle></button>
   {show && <p>Hello</p>}

   <h1 style = {{color}}>Color</h1>
   <button onClick= {() => setColor("blue")}>Change</button>
   
   <button onClick={() => setLiked(!liked)}>
      {liked ? "Liked ❤️" : "Like 🤍"}
    </button>
  </>
)  

}
export default App

/*Input Box

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input onChange={e => setName(e.target.value)} />
      <h1>{name}</h1>
    </>
  );
}
export default App;*/


/*Show-Hide Text

import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
return (
  <>
    <button onClick={ () => setShow(!show)}Toggle></button>
    {show && <p>Hello</p>}
  </>
);
}
 export default App;*/


