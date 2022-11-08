//@ts-ignore
import React, { useState } from "react";
//@ts-ignore
import styles from "../sashaLiftState/SashaLift.module.css";

export interface Props {
  fOnClick: (fColor: string) => void,
  fColor: string
}

const SashaLift1 = ({ fOnClick, fColor }:Props) => {
  console.log("lift1");
  return (
    <div>
      <button className={styles.btn} onClick={() => fOnClick(fColor)}>
        Change
      </button>
    </div>
  );
};

export default SashaLift1;
