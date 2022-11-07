//@ts-ignore
import styles from "../sashaForms/SashaForms.module.css";
//@ts-ignore
import { React, useState } from "react";
//@ts-ignore
import { I } from "./FormsParent.tsx"

const FormContainer = ({ setFormValue, setEdit}:any) => {
  const [inputValue, setInputValue] = useState<I>({ text: "" });
  const handleSubmit = () => {
    setFormValue(inputValue)
    setEdit((prevState:boolean) => !prevState)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
        <br></br>        
          Type here: 
          <br></br>
          <br></br>        
          <textarea
            value={inputValue.text}
            onChange={(e) =>
              setInputValue({ 
                ...inputValue, 
                text: e.target.value })
            }
          />
        </label>
        {/* <input type="submit" /> */}
      </form>      
      <button className = {styles.button} onClick={handleSubmit}> Submit</button>
    </>
  );
};

export default FormContainer;
