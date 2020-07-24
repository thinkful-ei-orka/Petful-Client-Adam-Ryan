import React from "react";
import QueueListing from './QueueListing';

export default function AdoptionQueue(props) {
  return (
    <ul>
      {props.people.map(person =>
        <QueueListing person={person} key={person}/>
      )}
    </ul>
  );
}