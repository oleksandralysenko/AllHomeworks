import React, { useEffect, useState } from "react";
import ButtonContainer from "./page components/Button";
import styles from "../consultation/consult.module.css";
import InfoComponent from "./InfoComponent";
import Buttons from "./Buttons";

const ConsultContainer = () => {

const[showInfo, setShowInfo] = useState(false);
// const [inputValue, setInputValue] = useState("");
// const [count, setCount] = useState(0);

useEffect(()=>{
  console.log("ConsultContainer")
})

// useEffect(()=>{
//     // console.log("працює лише коли зміниться значення inputValue і count", inputValue);
//     {inputValue.length === 4 && inputValue === "0000" && count===5 && setShowInfo (true)}
// }, [inputValue, count])

  return (
    <>
      <h1>Consult</h1>
      <Buttons showInfo={showInfo} setShowInfo={setShowInfo}/>
      {showInfo && <InfoComponent />}
    </>
  );
};

export default ConsultContainer;
