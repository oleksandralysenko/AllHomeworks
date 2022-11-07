import React, { useEffect, useState } from "react";
import { MentorRoutes, RedirectRoutes } from "../../common/routes/AppRoutes";
import { Link, Route, Routes } from "react-router-dom";
import HOC from "./HOC/Hoc";
import DumbComp from "./dumbComponent/DumbComp";
import DumbComp2 from "./dumbComponent/DumbComp2";
import styles from "../mentor/Mentor.module.css";
import SashaStyles from "../sasha/sashaHeader/SashaHeader.module.css"

import { Input } from "rsuite";
import { Button, ButtonToolbar } from "rsuite";

import Consultation from "./consultation/Consult";
import MentorFormContainer from "../mentor/forms/MentorFormContainer"
import NewAxiosPage from "./axios/Axios";
import Redux from "./axios/ReduxComponent";

const MentorContainer = () => {
  const [color, setColor] = useState("red");

      const authUser = JSON.parse(localStorage.getItem("authUser"));
  useEffect(()=>{
  localStorage.setItem("authUser", JSON.stringify({user: "ihor", role: "mentor"}))}, [])

  const firstFunction = (a) => console.log(a);
  const secondFunction = (a) => setColor(a);

  const [editMode, setEditMode] = useState(false);
  const [inputState, setInputState] = useState({
    name: "Ihor",
    role: "mentor"}
    );

  useEffect(() => {
    // console.log(inputState);
  }, [inputState]);

//   const a = {...b, ...c, value: "ihor" }

return (
    <>
      <h1>Mentor</h1>

      {/* <div className={styles.container}>
        {editMode ? (
          <Input
            placeholder="Default Input"
            value={inputState.name}
            onChange={(value)=>setInputState((prevState) => {
                return {
                ...prevState,
                name: value
            }})}
        />
        ) : (
          <p className={styles.p}>{inputState.name}</p>
        )}

{editMode ? (
          <Input
            placeholder="Default Input"
            value={inputState.role}
            onChange={(value)=>setInputState((prevState) => {
                return {
                ...prevState,
                role: value
            }})}
        />
        ) : (
          <p className={styles.p}>{inputState.role}</p>
        )}

        
        <Button
          color="green"
          appearance="primary"
          onClick={() => setEditMode((prevState) => !prevState)}
        >
          {editMode ? "Save" : "Edit"}
        </Button>

        
      </div>

      <DumbComp
        fTitle="Edit"
        sTitle="Delete"
        tTitle="Save"
        fOnClick={setColor}
        sOnClick={() => console.log("second Function")}
        tOnClick={() => console.log("third Function")}
        fColor="lightGreen"
        sColor={color}
        tColor="lightYellow"
      />

      <DumbComp2
        fTitle="Clear"
        sTitle="Remove"
        tTitle="Done"
        fOnClick={setColor}
        sOnClick={() => console.log("dfsfd")}
        tOnClick={() => console.log("fsdfsf")}
        fColor={color}
        sColor="violet"
        tColor="lightBlue"
      /> */}
      <div>
        <div className={SashaStyles.container}> 
        <Link to={`${RedirectRoutes.MENTOR}${MentorRoutes.HOC}`}>
          <span>HOC</span>
        </Link>

        <Link to={`${RedirectRoutes.MENTOR}${MentorRoutes.FORM}`}>
          <span>FORM</span>
        </Link>

        <Link to={`${RedirectRoutes.MENTOR}${MentorRoutes.CONSULT}`}>
          <span>Consultation</span>
        </Link>

        <Link to={`${RedirectRoutes.MENTOR}${MentorRoutes.AXIOS}`}>
          <span>Axios</span>
        </Link>

        <Link to={`${RedirectRoutes.MENTOR}${MentorRoutes.REDUX}`}>
          <span>Redux</span>
        </Link>

        </div>
        <Routes>
          <Route
            path={MentorRoutes.HOC}
            element={<HOC Component={<h1>Component argument</h1>} />}
          />
          <Route
            path={MentorRoutes.FORM}
            element={<MentorFormContainer/>}
          />

          <Route 
          path={MentorRoutes.CONSULT}
          element={<Consultation />}
          />

<Route 
          path={MentorRoutes.AXIOS}
          element={<NewAxiosPage />}
          />


<Route 
          path={MentorRoutes.REDUX}
          element={<Redux />}
          />

        </Routes>
      </div>
    </>
  );
};

export default MentorContainer;
