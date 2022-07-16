import React, { useState } from "react";
import "./lorem.css";

const loremDate = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "aLorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Consequatur at asperiores libero provident distinctio rerum consequuntur quis architecto rem iure vel commodi, quo assumenda tenetur ea quia minima quam! Necessitatibus",
];

function Lorem() {
  const [value, setValue] = useState(0);
  const [array, setArray] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    let res = +value;
    if (res < 0) res = 1;
    if (res > 8) res = 8;
    setArray(loremDate.slice(0, res));
  };

  return (
    <>
      <div className="loremBox w-80 mx-auto ">
        <h2 className="text-center">Lorem inkubatsiya</h2>
        <form
          action=""
          className="loremForm ui-container"
          onSubmit={submitForm}
        >
          <label htmlFor="state">Sarlavha soni</label>
          <input
            type="number"
            id="state"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn btn-outline-primary">Get Lorem</button>
          {array.map((data, index) => {
            return (
              <p className="loremText" key={index}>
                {(index, data)}
              </p>
            );
          })}
        </form>
      </div>
    </>
  );
}

export default Lorem;
