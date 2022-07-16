import React from "react";

function TableItem(props) {
  // console.log(props.post);

  const getBtnPost = () => {
    props.removePost(props.post);
  };

  return (
    <>
      <tr>
        <td>{props.number}</td>
        <td>{props.post.name}</td>
        <td>{props.post.stack}</td>
        <td>
          <button className="btn btn-outline-danger" onClick={getBtnPost}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableItem;
