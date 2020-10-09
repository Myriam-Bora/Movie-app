import React from "react";

//location으로 하면 location-state 처럼 더 빠르게 접근할 수 있다
function Details(props) {
  console.log(props);
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}

export default Details;
