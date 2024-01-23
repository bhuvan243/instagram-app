import React from "react";
import axios from "axios";

const Logout = () => {
  async function logoutUser({ token }) {
    try {
      const response = await axios.delete(
        "https://instagram-express-app.vercel.app/api/auth/logout",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="logout-btn">
      <h3>Click here to Logout</h3>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Logout;
