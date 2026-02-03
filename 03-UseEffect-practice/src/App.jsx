import { useState , useEffect } from 'react'


/*Runs On Page Load 

function App() {
  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  return <h1>Hello</h1>;
} */



/*Runs When Count Changes (Count Watcher) 

function App()  {
  const  [count, setCount] = useState(0);

  useEffect( () => {
    console.log("Count Changes:", count);
  },[count]);

  return <button onClick={() => setCount(count + 1)}>+</button>;

}*/

/*Update Browser Title

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name]);

  return <input onChange={e => setName(e.target.value)} />;
}
*/

/*Timer

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => setTime(t => t+1), 1000);
  }, []);

  return <h1>{time}</h1>;
}
*/

/*Log Typing*/

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return <input onChange={e => setText(e.target.value)} />;
}






























export default App
