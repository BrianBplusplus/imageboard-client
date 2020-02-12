import React from "react";

export default function LoginForm(props) {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      <p>Login</p>
      E-Mail
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        values={props.values.email}
        onChange={event => props.onChange(event)}
      ></input>
      <br></br>
      password
      <input
        type="password"
        name="password"
        placeholder="Password"
        values={props.values.password}
        onChange={event => props.onChange(event)}
      ></input>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
