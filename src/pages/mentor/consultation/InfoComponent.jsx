import React, { useEffect } from "react";
import styles from "../consultation/consult.module.css";

const InfoComponent = () => {
  
  useEffect(()=>{
    console.log("info component - works always")
  })

  useEffect(()=>{
    console.log("info component - works on mount")
  }, [])

  return (
    <>
      <h1>Info</h1>
        </>
  );
};

export default InfoComponent;
