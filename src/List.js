import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((item) => {
        const { id, name, age, image } = item;
        return (
          <article key={id} className="person">
            <img src={image} alt="name" />
            <div>
              <h5>{name}</h5>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
