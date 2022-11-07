import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./Header.module.css";
import { AppRoutes, RedirectRoutes } from "../../common/routes/AppRoutes";
import MainSashaHeader from "../../pages/sasha/sashaHeader/SashaHeader";
import MainPageComp from "../../pages/main/MainPage"

const Header = () => (
    <>
    <div className={styles.container}>
      {/* <Link to={RedirectRoutes.MAIN_PAGE}> 
      <span>Main</span> */}
      {/* </Link> */}
      <Link to={AppRoutes.SASHA}>
      <span>Sasha</span>
      </Link>
      {/* <Link to={AppRoutes.MENTOR}>
      <span>Mentor</span>
      </Link> */}

      
     
    </div>

    {/* <Routes>
      <Route path={RedirectRoutes.SASHA} element={MainSashaHeader}></Route>
      <Route path={RedirectRoutes.MAIN_PAGE} element={MainPageComp}></Route>
    </Routes> */}
    </>  

);

export default Header;
