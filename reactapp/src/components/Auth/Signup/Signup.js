import { useState } from "react";

const Signup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredMobileno, setEnteredMobileno] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const mobileNoChangeHandler = (event) => {
    setEnteredMobileno(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      enteredEmail,
      enteredPassword,
      enteredUsername,
      enteredMobileno
    );
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Enter email</label>
        <input
          type="text"
          data-testid="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />

        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          data-testid="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="mobileNumber">Enter mobile no</label>
        <input
          type="number"
          data-testid="mobileNumber"
          value={enteredMobileno}
          onChange={mobileNoChangeHandler}
        />
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          data-testid="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          data-testid="confirmPassword"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <button type="submit" data-testid="submitButton">
          Login
        </button>
      </form>
      <p>Already a user?</p>
      <button data-testid="signinLink">Signin</button>
    </>
  );
};

export default Signup;
