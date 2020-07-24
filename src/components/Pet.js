import React from "react";

export default function Pet(props) {
  return (
    <section>
      <h3>{props.pet.name}</h3>
      <img src={props.pet.imageURL} alt={`${props.pet.description}`} />
      <table>
        <tr>
          <th>Name</th>
          <tr>{props.pet.age}</tr>
        </tr>
        <tr>
          <th>Gender</th>
          <tr>{props.pet.gender}</tr>
        </tr>
        <tr>
          <th>Breed</th>
          <tr>{props.pet.breed}</tr>
        </tr>
        <tr>
          <th>Story</th>
          <tr>{props.pet.story}</tr>
        </tr>
      </table>
      {props.people[0]===props.user?<button type='button' onClick={'Adoption'}>Adopt Me!</button>:null}
    </section>
  );
}