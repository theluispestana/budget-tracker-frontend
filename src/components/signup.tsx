import React from "react";
import { postUser } from "../helpers/requests";

function SignUp() {
  const [email, handleEmail] = React.useState("");
  const [name, handleName] = React.useState("");

  function handleSignUp(event: any) {
    event.preventDefault();
    console.log({ user: { email: email, name: name } });

    postUser(email, name).then(console.log);
  }

  return (
    <div>
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
        <button onClick={(event) => handleSignUp(event)}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
