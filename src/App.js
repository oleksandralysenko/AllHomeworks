import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./common/routes/AppRoutes";
import MainPageComp from "./pages/main/MainPage";
import Header from "./components/header/Header";
import NotFoundComp from "./pages/404/NotFoundPage";
import MainSashaHeader from "./pages/sasha/sashaHeader/SashaHeader";
import MentorContainer from "./pages/mentor/Mentor";
import 'rsuite/dist/rsuite.min.css';

const App = ()=>  {
  return (
    <>
    <Header/>
         <Routes>
        {/* <Route path={AppRoutes.MAIN_PAGE} element={<MainPageComp/>}/> */}
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundComp/>}/>
        <Route path={AppRoutes.SASHA} element={<MainSashaHeader/>}/>
        <Route path={AppRoutes.MENTOR} element={<MentorContainer/>}/>

      </Routes> 
           
    </>
  );
}

export default App;
