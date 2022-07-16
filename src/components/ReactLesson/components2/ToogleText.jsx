import React, { useState } from "react";

const ToogleText = () => {
  const [toogleBtn, setToogleBtn] = useState(false);
  const showText = () => {
    setToogleBtn(!toogleBtn);
  };
  return (
    <>
      <hr />
      <button className="btn btn-secondary" onClick={showText}>
        Toogle btn
      </button>
      {toogleBtn ? <p className="lead">This is Toogle content</p> : null}
    </>
  );
};

export default ToogleText;
