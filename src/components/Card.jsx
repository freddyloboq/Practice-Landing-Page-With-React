import React, { useState } from "react";

const Card = (props) => {
  let [count, setCount] = useState(0);
  return (
    <div className="container">
      <div
        className={`card ${count > 7 ? "bg-dark" : ""}`}
        class="card mb-5"
        style={{ width: "14rem" }}
      >
        <img src={props.img} class="card-img-top" alt="mario" />
        <div class="card-body text-center">
          <h5 class="card-title text-center">{props.tittle}</h5>
          <p class="card-text text-center">{props.description}</p>
          <button
            class="btn btn-primary text-center"
            onClick={() => setCount(count + 1)}
          >
            Go somewhere
          </button>
          <h1>{count}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
