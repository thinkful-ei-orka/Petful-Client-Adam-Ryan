import React from "react";

export default function Pet(props) {
  return (
    <section>
      <h3>{props.pet.name}</h3>
      <img src={props.pet.imageURL} alt={`${props.pet.description}`} />
      <table>
        <tbody>
          <tr>
            <th>Age</th>
            <td>{props.pet.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{props.pet.gender}</td>
          </tr>
          <tr>
            <th>Breed</th>
            <td>{props.pet.breed}</td>
          </tr>
          <tr>
            <th>Story</th>
            <td>{props.pet.story}</td>
          </tr>
        </tbody>
      </table>
      {(props.people===undefined || props.people[0] === props.user) ? (
        <button
          type="button"
          onClick={() => props.handlePetAdopted(props.type)}
        >
          Adopt Me!
        </button>
      ) : null}
    </section>
  );
}
