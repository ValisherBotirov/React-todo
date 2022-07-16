import React, { useCallback, useState } from "react";
import Button from "./Button";

const UseCallbackHooks = () => {
  // console.log("result");
  const [value, setValue] = useState(0);
  const [state, setState] = useState(1);

  useCallback(() => {
    setValue(value + 10);
    console.log("usecallback ishladi");
  }, [setValue]);

  const changeUseCallback = () => {
    setState((prevState) => prevState + 2);
  };

  useCallback(() => {
    console.log("usecallback ishladi");
  }, [setState]);

  return (
    <>
      <h1>useCallbek amaliyot : {value}</h1>
      <Button change={() => setValue((prevState) => prevState + 1)} />
      <h2>UseCallback : {state}</h2>
      <button onClick={changeUseCallback}>UseCallback</button>
    </>
  );
};

export default UseCallbackHooks;
