import axios from "axios";
import React, { useEffect, useState } from "react";
import API_Item from "./API_Item";

function API() {
  const [data, setData] = useState("");
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  async function getDateApi(page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: 10,
          _page: page,
        },
      }
    );
    setData(response.data);
  }

  useEffect(() => {
    console.log(page);
    getDateApi(page);
  }, [page]);

  const getIndex = () => {
    setIndex((prevState) => prevState + 1);
    console.log(index);
  };

  return (
    <>
      <button
        className="btn btn-primary my-4"
        onClick={() => {
          getIndex();
        }}
      >
        Get Post
      </button>
      <button
        className={`btn btn-secondary mx-5 ${page <= 1 ? "disabled" : " "}  `}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        End : {page <= 1 ? " " : page - 1}
      </button>
      <button
        className={`btn btn-primary ${page >= 10 ? "disabled" : " "}`}
        onClick={() => setPage((prevPage) => prevPage + 1)}
      >
        Next : {page >= 10 ? " " : page + 1}
      </button>
      <div className="border">
        {data ? (
          <p>
            {data.map((post) => (
              <API_Item title={post.title} id={post.id} key={post.id} />
            ))}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default API;
