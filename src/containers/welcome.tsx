import React from "react";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn";
import "../styles/welcome.css";

function Welcome() {
  return (
    <div id="welcome-container">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default Welcome;
