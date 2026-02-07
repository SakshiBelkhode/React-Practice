import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { username } = useContext(UserContext);
  return <h3>Profile – Welcome {username}</h3>;
};

export default Profile;