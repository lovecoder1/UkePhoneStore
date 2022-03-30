import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <ul>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
      </ul>
    </div>
  );
}

export default MenuItem;
