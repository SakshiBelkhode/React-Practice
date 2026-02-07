import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Settings = () => {
  const { setUsername } = useContext(UserContext);
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Enter new username"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setUsername(name)}>Change Username</button>
    </div>
  );
};

export default Settings;