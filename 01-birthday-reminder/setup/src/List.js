import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h2>{name}</h2>
              <h3>{age}</h3>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
