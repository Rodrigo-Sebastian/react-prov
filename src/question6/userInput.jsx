import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./usersSlice";

function UserInput() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.list);

  const handleAddUser = () => {
    if (username.trim() !== "") {
      dispatch(addUser(username));
      setUsername("");
    }
  };
  
  return (
  <div>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Användarnamn" />
    <button onClick={handleAddUser}>Lägg till användare</button>
    <ul>
      {userList.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  </div>
  );
}

export default UserInput;