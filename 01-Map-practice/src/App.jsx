import React from "react";

function App() {
  const result = [1, 2, 3, 4].map(n => n * 2);
  console.log(result); // console output
  
  const add = [5, 10, 15, 20].map(n => n+10);
  console.log(result);

  const upper = ["Sakshi", "Pratik", "Neha"].map(n => n.toUpperCase());
  console.log(upper);

  const results = ["Sakshi","Amit"].map( n=> "Hi" + n )    
  console.log(results);

  const square = [2,4,6].map( n => n * n );
  console.log(square);

  const users = [
    {name: "Sakshi", age:22 },
    {name: "Rahul", age:24}
  ];
  const names = users.map(u => u.name);
  const mark =users.map(u => ({...u, age: u.age + 1}));
  console.log(names);
  console.log(mark);

  /*
  8. Add isAdult
  const result = users.map(u => ({ ...u, isAdult: u.age >= 18}));
  
  9.Make Sentence
  const result = users.map(u => `${u.name} is ${u.age}`);
  We Convert objects into readable things.

  10.Convert Dollars to rupees
  const result = [10,20,30].map(p => p * 80);
  Multiply each by price 80.

  11.Show Names in React
  {["Sakshi", "Neha"].map ( n => <p>{n}</p>)}
  Each Array Items Become a <p> </p> Tag.

  12.Render List 
  {users.map(u => <li>{u.name}</li>)}  o/p = Sakshi Rahul
  We turn array into list items.

  13.Show Products
  {products.map(p => <h3>{p.name}</h3>)}  o/p = Mobile Laptop
  Each product become a heading.

  14.Multiply by index 
  [2,4,6].map((n,i) => n * i); o/p = [0,4,12]
  Each number is multiplied by its index.

  15.Cards in React
  {users.map(u => <div>{u.name}</div>)}     o/p- sakshi Rahul
  Each uiser becomes a card

  
  
  map() = Take array → Change each item → Return new array

In React:

map() = Array → UI
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */


  return (
    <>
      <h1>Map 15 Question Practice</h1>
      
      <h2>1.Double the Numbers</h2>
      <p>{result.join(", ")}</p>
      
     
      <h2>2.Adding 10</h2>
      <p>{add.join(", ")}</p>

      <h2>3. To make Uppercase</h2>
      <p>{upper.join("-")}</p>

      <h2>4. Adding the Hi</h2>
      <p>{results.join("-")}</p>

      <h2>5. Square of Numbers</h2>
      <p>{square.join(",")}</p>
      
      <h2>6. Get Only Names</h2>
      <p>{names.join(",")}</p>

      <h2>7.Increase age by 1</h2>
      <p>{mark.join(",")}</p>
    </>
  );
}

export default App;

