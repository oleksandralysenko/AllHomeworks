import React, { useEffect, useState } from "react";
import styles from "../consultation/consult.module.css";
import ButtonContainer from "./page components/Button";

const Buttons = ({showInfo}, {setShowInfo}) => {
  useEffect(()=>{
    console.log("Buttons")
  })
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    // console.log(e)
    // console.log(e.target.value);
    setInputValue(e.target.value)
}
const handleHideInfo = () => {
  setShowInfo(false)
}
  return (
    <>
      <h2
      onClick={()=>setCount(count+1)}
    //   onClick={()=>setCount((prevState)=>prevState+1)}

      >{count}</h2>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <ButtonContainer 
      title="show" 
      nameOfClass={styles.addBtn} 
      handleClick={()=>setShowInfo(true)}
      />
      <ButtonContainer 
      title="hide" 
      nameOfClass={styles.deleteBtn} 
      handleClick={handleHideInfo}
      />
   <ButtonContainer 
      title={showInfo ? "Hide" : "Show"} 
      nameOfClass={showInfo ? styles.deleteBtn : styles.addBtn} 
      handleClick={()=>setShowInfo((prevState)=>!prevState)}
      />

        </>
  );
};

export default Buttons;
