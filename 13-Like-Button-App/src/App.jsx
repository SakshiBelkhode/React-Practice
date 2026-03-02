import { useState } from "react";
import "./App.css";

function App() {

  // Boolean state
  const [liked, setLiked] = useState(false);

  // Count state
  const [count, setCount] = useState(0);

  const handleLike = () => {

    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }

  };

  return (
    <div className="container">

      <h1>Like Button App</h1>

      <div className="like-box" onClick={handleLike}>
        <span className={liked ? "heart liked" : "heart"}>
          ❤️
        </span>
        <p>{count} Likes</p>
      </div>

    </div>
  );
}

export default App;