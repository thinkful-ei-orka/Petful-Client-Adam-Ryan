import React from "react";

export default function AdoptionQueue(props) {
  return (
    <form onSubmit={'addToQueue'}>
      <input placehodler='Enter Name Here' value={props.user} onChange={(e)=>{props.userChange(e.target.value)}} />
      <button type='submit' onClick={'addToQueue function'}>Join the adoption queue!</button>
    </form>
  );
}