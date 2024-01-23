import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Logout from "./Components/Logout";
function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Signup setToken={setToken} />
      <Login setToken={setToken} />
      <Dashboard token={token} />
      <Logout />
    </div>
  );
}

export default App;
