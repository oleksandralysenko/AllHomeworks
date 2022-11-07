//@ts-ignore
import {React, useState } from "react";
//@ts-ignore
import styles from "../sashaForms/SashaForms.module.css";
//@ts-ignore
import FormContainer from "./SashaForms.tsx";

export interface I {
  text: string
}

const FormsParent = () => {
  const [formValue, setFormValue] = useState<I>({ text: "" });
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <FormContainer formValue={formValue} setFormValue={setFormValue} edit = {edit} setEdit = {setEdit}/>
      {edit ? (
        <div className={styles.smallContainer}>{formValue.text}</div>
      ) : ("")}
      
    </div>
  );
};
export default FormsParent;