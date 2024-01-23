import React, { useState } from "react";
import axios from "axios";

const Signup = ({setToken}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // destructuring the variables in user useState
  const { name, email, password, confirmPassword } = user;

  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }
  async function implementSignup(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://instagram-express-app.vercel.app/api/auth/signup",
        { name, email, password }
      );
      console.log("Success Response" + JSON.stringify(response.data, null, 2));
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setToken(response.data.data.token);

    //   after successful signup, update inputs to empty in the user object
    setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    } catch (err) {
      console.log("Error", err.response.data.message);
      setErrorMessage(err.response.data.message);
      setSuccessMessage("");
    }
  }

  return (
    <div>
        <h1>Sign Up</h1>
      {successMessage && <h2>{successMessage}</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}

      <form onSubmit={implementSignup}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          name="name"
          onChange={updateUser}
        />
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
        <input
          type="text"
          placeholder="Enter confirm password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={updateUser}
        />
        <button type="submit">Signup</button>
      </form>
      <hr />
    </div>
  );
};

export default Signup;
