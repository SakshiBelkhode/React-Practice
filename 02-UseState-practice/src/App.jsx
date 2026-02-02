/*Counter Practice

import { useState } from "react";

function App (){
  const [count , setCount] = useState(0);
 
return(
  <>
   <h1>{count}</h1> 
   <button onClick = {() => setCount (Count + 1)}>+</button> 
  
  </>
)  

}
export default App*/ 

/*Input Box*/ 

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
export default App;


