import React from "react";

export default function AdoptionQueue(props) {
  return (
    <form onSubmit={'addToQueue'}>
      <input placehodler='Enter Name Here' value={props.user} onChange={(e)=>{props.userChange(e.target.value)}} />
      <button type='submit' onClick={()=>{
        ///your function
        while(props.people!==props.user){props.demoFunction()}
      }}>Join the adoption queue!</button>
    </form>
  );
}