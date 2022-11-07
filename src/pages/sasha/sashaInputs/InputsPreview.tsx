import React from "react";
// @ts-ignore
import styles from "../sashaInputs/sashaInputs.module.css"

export interface Props {
    Name: string
    Surname: string
    Age: string
    Role: string
    Job: string
}

const InputsPreview = ({Name, Surname, Age, Role, Job}:Props) => {
    console.log("inputs preview")
        return(
            <div className={styles.previewContainer}>
                <h5>{Name}</h5>
                <h5>{Surname}</h5>
                <h5>{Age}</h5>
                <h5>{Role}</h5>
                <h5>{Job}</h5>
            </div>
        )
    };
    
    export default InputsPreview;