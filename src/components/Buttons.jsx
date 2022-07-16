import React, { useState, useEffect } from "react";

const Buttons = (props) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    props.handleState(state);
  }, [state]);

  const addState = () => {
    setState((prevState) => prevState + 1);
  };

  const deleteState = () => {
    setState((prevState) => prevState - 1);
  };

  const randomState = () => {
    let random = Math.floor(Math.random() * 20 - 10);
    if (Math.abs(state) > 10) {
      setState((prevState) => Math.floor(prevState / random));
    } else {
      setState((prevState) => Math.floor(prevState * random));
    }
  };

  return (
    <div>
      <button className="btn btnAdd" onClick={addState}>
        Add (+1)
      </button>
      <button className="btn btnDelete" onClick={deleteState}>
        Delete (-1)
      </button>
      <button className="btn btnRand" onClick={randomState}>
        Random
      </button>
    </div>
  );
};

export default Buttons;
