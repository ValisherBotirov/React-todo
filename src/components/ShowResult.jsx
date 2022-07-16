import React from "react";

const ShoeResults = (props) => {
  return (
    <div className="display">
      <h2 style={{ fontSize: "36px" }}>Ekran : {props.result}</h2>
    </div>
  );
};

export default ShoeResults;
