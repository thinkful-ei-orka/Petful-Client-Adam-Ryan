import React from "react";

export default function AdoptionQueue(props) {
  return (
    <form
      onSubmit={() => {
        props.addToQueue(props.user);
        while (props.people !== props.user) {
          props.demoFunction();
        }
      }}
    >
      <input
        placehodler="Enter Name Here"
        value={props.user}
        onChange={(e) => {
          props.userChange(e.target.value);
        }}
      />
      <button type="submit">Join the adoption queue!</button>
    </form>
  );
}
