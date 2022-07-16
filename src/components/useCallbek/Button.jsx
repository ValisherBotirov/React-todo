import React from "react";

function Button({ change }) {
  console.log("Button component");
  return (
    <>
      <button onClick={change}>Button</button>
    </>
  );
}

export default Button;
