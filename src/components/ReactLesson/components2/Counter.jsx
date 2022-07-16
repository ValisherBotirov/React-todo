import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState((prevState) => prevState + 1);
  };

  const dec = () => {
    setState((prevState) => prevState - 1);
  };

  return (
    <>
      <h2>Count : {state}</h2>
      <button className="btn btn-success" onClick={inc}>
        INCR
      </button>
      <button className="btn btn-danger" onClick={dec}>
        DECR
      </button>
    </>
  );
};

export default Counter;
