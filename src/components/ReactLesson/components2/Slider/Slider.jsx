import React from "react";
import { useState } from "react";
import "./slider.css";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";

const data = [
  { id: 1, img: slider1 },
  { id: 2, img: slider2 },
  { id: 3, img: slider3 },
  { id: 4, img: slider4 },
];

console.log(data[0].img);

function Slider() {
  const [count, setCount] = useState(0);

  const moveRight = () => {
    console.log(count);
    let amout = count;
    if (amout < 4) setCount((prevState) => prevState + 1);
    else setCount(0);
  };

  const moveLeft = () => {
    console.log(count);
    let amout = count;
    if (amout > 0) setCount((prevState) => prevState - 1);
    else setCount(4);
  };

  return (
    <>
      <div className="slider text-center">
        <h2 className="sliderText">Hero Slider</h2>
        <button
          className="btn btn-outline-primary btnRight"
          onClick={moveRight}
        >
          Oldinga
        </button>
        <button className="btn btn-outline-primary btnLeft" onClick={moveLeft}>
          {" "}
          Orqaga
        </button>
        <div className="slider--box ">
          <div className="slider--images">
            <img src={data[count].img} alt="icon " className=" images" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
