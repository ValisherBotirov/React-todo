import React from "react";

function MyInput({ getSearchValue, value }) {
  return (
    <>
      <input
        value={value}
        type="text"
        placeholder="Search..."
        className="form-control"
        onChange={getSearchValue}
      />
    </>
  );
}

export default MyInput;
