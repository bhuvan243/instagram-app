import React, { useState } from "react";
import axios from "axios";

const Login = ({setToken}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // destructuring the variables in user useState
  const { email, password } = user;

  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }
  async function implementLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://instagram-express-app.vercel.app/api/auth/login",
        { email, password }
      );
      console.log("Success Response" + JSON.stringify(response.data, null, 2));
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setToken(response.data.data.token);

    //   after successful signup, update inputs to empty in the user object
    setUser({
        email: "",
        password: "",
    })
    } catch (err) {
      console.log("Error", err.response.data.message);
      setErrorMessage(err.response.data.message);
      setSuccessMessage("");
    }
  }

  return (
    <div>
        <h1>Login</h1>
      {successMessage && <h2>{successMessage}</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}

      <form onSubmit={implementLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          name="email"
          onChange={updateUser}
        />
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          name="password"
          onChange={updateUser}
        />
        <button type="submit">Login</button>
      </form>
      <hr />
    </div>
  );
};

export default Login;
