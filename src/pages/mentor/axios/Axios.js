// import { useEffect, useState } from "react";
// import { Endpoints } from "../../../api/Endpoints";
// import {deleteCharacter, getCharacter} from "../../../api/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
// import React from "react";
// // import { loadData } from "../../../api/apiCalls";
// import { getCharactersThunk, getMoreCharactersThunk } from "../../../redux/actions/charactersActions";

// const btnStyle = {
//   margin: "20px",
//   backgroundColor: "violet",
//   color: "pink",
//   padding: "10px",
// };


// const AxiosPage = () => {
//   const dispatch = useDispatch()
//   const characters = useSelector((state) => state.characters.items?.results)
//   const info = useSelector((state) => state.characters.items?.info)
//   const isLoading = useSelector((state) => state.characters.loading)
//   const error = useSelector((state) => state.characters.error)
//   const getCharacters = () => dispatch(getCharactersThunk())
//   const getMoreCharacters = (url) => dispatch(getMoreCharactersThunk(url))


// useEffect(()=>{
//   getCharacters();
// }, [])

// return (
//   <div>
//     <h1>Axios</h1>

//     {isLoading && <h1>Loading...</h1>}
//     {characters && !isLoading && characters?.map((item)=>(
//       <div key={item.id}>
//         <p>{item.name}</p>
//         <img src={item.image} alt=" "/>
//       </div>
//     ))}
// {error && <h1>{error.message}</h1>}

// <button style={btnStyle} onClick={()=>getMoreCharacters(info.next)}>Get More</button>
//   </div>
// )

// }

// export default AxiosPage;