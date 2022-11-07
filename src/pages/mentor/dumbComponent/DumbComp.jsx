import React from "react";
import styles from "../dumbComponent/DumbComp.module.css"

const DumbComp = ({ fTitle, sTitle, tTitle, fOnClick, sOnClick, tOnClick, fColor, sColor, tColor }) => (
  <div className={styles.container}>
    <button onClick={() => fOnClick("red")}
    style={{backgroundColor: fColor}}
    >{fTitle}</button>
    <button onClick={sOnClick}
    style={{backgroundColor: sColor}}
    >{sTitle}</button>
    <button onClick={tOnClick}
    style={{backgroundColor: tColor}}
    >{tTitle}</button>
  </div>
);
export default DumbComp