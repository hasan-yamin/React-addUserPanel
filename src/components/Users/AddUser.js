import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { useState } from "react";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredAge.trim().length === 0 ||
      +enteredAge < 1 ||
      enteredUserName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    // console.log(enteredAge, enteredUserName);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError();
  };
  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
