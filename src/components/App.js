import React, { useState } from "react";
import Buttons from "./Buttons";
import ShoeResults from "./ShowResult";
// useCallbek amaliyot
import UseCallbackHooks from "./useCallbek/UseCallbackHooks";

const App = () => {
  const [state, setState] = useState("");
  const handleState = (state) => {
    console.log(state);
    setState(state);
  };

  return (
    <div>
      <ShoeResults result={state} />
      <Buttons handleState={handleState} />
      <UseCallbackHooks />
    </div>
  );
};

export default App;
