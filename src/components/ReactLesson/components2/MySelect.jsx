import React from "react";

function MySelect({ defaultValue, options, getSelectValue }) {
  const getValue = (e) => {
    getSelectValue(e.target.value);
  };

  return (
    <>
      <select onChange={getValue} className="form-select w-50">
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default MySelect;
