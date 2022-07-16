import React from "react";

function API_Item({ id, title }) {
  return (
    <div>
      <p style={{ padding: "5px 0", border: "1px solid black" }}>
        <span style={{ fontWeight: "700", marginRight: "15px" }}>{id}</span>
        {title}
      </p>
    </div>
  );
}

export default API_Item;
