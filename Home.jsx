import React, { useState } from "react";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => setLoggedIn(!loggedIn);

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {loggedIn ? "Welcome back, User!" : "Please log in to see more content."}
      </p>
      <button onClick={toggleLogin}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Home;
