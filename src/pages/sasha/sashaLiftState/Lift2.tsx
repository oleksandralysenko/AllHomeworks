//@ts-ignore
import React, { useState } from "react";
//@ts-ignore
import styles from "../sashaLiftState/SashaLift.module.css";

export interface Props{
  fOnClick: (fColor: string) => void,
  fColor: string
}

const SashaLift2 = ({ fOnClick, fColor }:Props) => {
  console.log("lift2");
  return (
    <div>
      <button className={styles.btn} onClick={() => fOnClick(fColor)}>
        Change Again
      </button>
    </div>
  );
};

export default SashaLift2;
