import { useState } from "react";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
  };

  return (
    <>
      <h1 data-testid="loginBox">Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Enter email</label>
        <input
          type="text"
          data-testid="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          data-testid="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <button type="submit" data-testid="loginButton">
          Login
        </button>
      </form>
      <p>New user/admin?</p>
      <button data-testid="signupLink">Signup</button>
    </>
  );
};

export default Login;
