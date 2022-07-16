import React from "react";
import classes from "./modal.module.css";

function Modal({ children, modal, setModal }) {
  const classesArr = [classes.myModal];
  if (modal) classesArr.push(classes.active);
  return (
    <div className={classesArr.join(" ")} onClick={() => setModal(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <p className={classes.exitModal} onClick={() => setModal(false)}>
          ✖
        </p>
      </div>
    </div>
  );
}

export default Modal;
