import React, { useState } from "react";

function InputValue() {
  const [value, setValue] = useState("");
  const getInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>Value : {value}</p>
      <input type="text" className="form-control" onChange={getInputValue} />
    </>
  );
}

export default InputValue;
