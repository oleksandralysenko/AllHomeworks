import React from "react";
import styles from "../consult.module.css";

const btnStyle = {
    height: "50px",
    width: "175px",
    fontWeight: "bolder",
    borderRadius: "5px",
    margin: "10px",
}

const ButtonContainer = ({ title, nameOfClass, handleClick }) => {
  

  return (
    <>
      <button
    //   className={`${nameOfClass} ${styles.btn}`}
      className={nameOfClass}
      style={btnStyle}
      onClick={handleClick}
      >
        {title}
    </button>
    </>
  );
};

export default ButtonContainer;
