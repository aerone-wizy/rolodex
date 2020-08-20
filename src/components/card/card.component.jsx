import React from "react";

export const Card = (props) => (
  <div>
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />
    <h1 key={props.monster.id}> {props.monster.name}</h1>
  </div>
);
