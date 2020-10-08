import React from "react";
import { getUser } from "../helpers/requests";
import { Redirect } from "react-router-dom";

function SignIn() {
  const [email, handleEmail] = React.useState("");
  const [signedIn, handleSignIn] = React.useState(false);

  function handleFormSubmission(event: any) {
    event.preventDefault();

    getUser(email).then((json) => {
      console.log(json[0]);
      handleSignIn(true);
      localStorage.setItem("user", JSON.stringify(json[0]));
      localStorage.setItem("id", json[0]._id);
    });
  }

  return (
    <div id="sign-in-container">
      {signedIn && <Redirect to="/budget" />}
      <h1>Sign In</h1>
      <form>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => handleEmail(event.target.value)}
          placeholder="Email"
        />
        <br />
        <button onClick={(event) => handleFormSubmission(event)}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
