import React, { useState } from "react";
import styles from "../dumbComponent/DumbComp.module.css"

const DumbComp2 = ({ fTitle, fColor, fOnClick}) => 
{  
return(
  <div className={styles.container}>
    <button 
    // onClick={() => fOnClick("green")}
    onClick={() => 
      {fOnClick("green")
    }}
    style={{backgroundColor: fColor}}
    >{fTitle}</button>
    
  </div>
)};
export default DumbComp2