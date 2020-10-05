import React from "react";
import PropTypes from "prop-types";

const ILikeFood = [
  { id: 1, name: "kimchi", heart: "❤❤", rate: 7 },
  { id: 2, name: "kimbab", heart: "❤", rate: 8 },
  { id: 3, name: "gomtang", heart: "❤❤❤❤", rate: 4 },
];

function Food({ name, heart, rate }) {
  return (
    <div>
      <h2>FOOD IS {name}</h2>
      <h3>{heart}</h3>
      <h3>{rate}/5.0</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  heart: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {ILikeFood.map((dish) => (
        <Food
          name={dish.name}
          heart={dish.heart}
          key={dish.id}
          rate={dish.rate}
        />
      ))}
      {/* {ILikeFood.map(function (dish) {
        return <Food name={dish.name} heart={dish.heart} />;
      })} */}
    </div>
  );
}

export default App;
