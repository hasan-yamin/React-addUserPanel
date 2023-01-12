import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([{ name: "hasan", age: 50 }]);
  const addUserHandler = (userName, age) => {
    setUsersList((prevUsersList) => {
      return [{ name: userName, age: age }, ...prevUsersList];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
