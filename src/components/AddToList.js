import React from "react";

export default function AdoptionQueue(props) {
  return (
    <form
      className="QueueForm"
      onSubmit={(e) => {
        e.preventDefault();
        props.addToQueue(props.user);

        props.demoFunction();
      }}
    >
      <input
        placeholder="Enter Name Here"
        value={props.user}
        onChange={(e) => {
          props.userChange(e.target.value);
        }}
        required
      />
      <button className="QueueButton" type="submit">
        Join the adoption queue!
      </button>
    </form>
  );
}
