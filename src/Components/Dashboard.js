import React, { useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState("");
  async function getJoke() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.data.message);
    } catch (err) {
      console.log("Error :", err.response.data.message);
    }
  }

  return (
    <div style={{marginBottom : "20px"}}>
      <h1>Dashboard</h1>
      {message && <cite>{message}</cite>}
      <br /><br />
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
};

export default Dashboard;
