import React from "react";

function Food({ name, heart }) {
  return (
    <div>
      <h2>FOOD IS {name}</h2>
      <h3>{heart}</h3>
    </div>
  );
}

const ILikeFood = [
  { id: 1, name: "kimchi", heart: "❤❤" },
  { id: 2, name: "kimbab", heart: "❤" },
  { id: 3, name: "gomtang", heart: "❤❤❤❤" },
];

function App() {
  return (
    <div>
      {ILikeFood.map((dish) => (
        <Food name={dish.name} heart={dish.heart} key={dish.id} />
      ))}
      {/* {ILikeFood.map(function (dish) {
        return <Food name={dish.name} heart={dish.heart} />;
      })} */}
    </div>
  );
}

export default App;
