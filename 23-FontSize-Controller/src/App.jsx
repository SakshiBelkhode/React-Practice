import { useContext } from "react";
import { FontContext } from "./FontContext";

const App = () => {

  const { fontSize, increaseFont, decreaseFont } = useContext(FontContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1 style={{ fontSize: fontSize }}>
        Context API Font Size Controller
      </h1>

      <button onClick={increaseFont}>
        Increase Font
      </button>

      <button onClick={decreaseFont} style={{ marginLeft: "10px" }}>
        Decrease Font
      </button>

    </div>
  );
};

export default App;