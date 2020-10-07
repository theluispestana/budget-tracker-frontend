import React from "react";
import { postUser } from "../helpers/requests";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [email, handleEmail] = React.useState("");
  const [name, handleName] = React.useState("");
  const [signedUp, handleSignUp] = React.useState(false);

  function handleFormSubmission(event: any) {
    event.preventDefault();
    console.log({ user: { email: email, name: name } });

    postUser(email, name).then((json) => {
      handleSignUp(true);
      localStorage.setItem("user", JSON.stringify(json));
      localStorage.setItem("id", json[0]._id);
    });
  }

  return (
    <div>
      {signedUp && <Redirect to="/budget" />}
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => handleEmail(event.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => handleName(event.target.value)}
          placeholder="Name"
        />
        <br />
        <button onClick={(event) => handleFormSubmission(event)}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
