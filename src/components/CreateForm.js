import React from "react";

export default function CreateForm(props) {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      Title
      <input
        type="text"
        name="title"
        placeholder="title"
        values={props.values.title}
        onChange={event => props.onChange(event)}
      ></input>
      url
      <input
        type="text"
        name="url"
        placeholder="URL"
        values={props.values.url}
        onChange={event => props.onChange(event)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
