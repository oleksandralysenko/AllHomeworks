// import { useEffect, useState } from "react";
// import { Endpoints } from "../../../api/Endpoints";

// import {
//     deleteCharacter,
//     getCharacter, loadData, 
//     loadMoreData
// } from "../../../api/apiCalls";

// import { getCharactersThunk, getMoreCharactersThunk } from "../../../redux/actions/charactersActions";
// import { useDispatch, useSelector } from "react-redux";

// const NewAxiosPage = () => {
//   const [characters, setCharacters] = useState({});
//   useEffect(() => {
//     loadData()
//       .then((data) => setCharacters(data.data))
//       .catch((err) => console.log(err));
//   }, []);


//   useEffect(()=>{
//    characters.results && console.log(characters)
//   }, [characters])

// const getMore = () => {
//     loadData(characters?.info.next)
//     .then((data) => {setCharacters((prevState)=> {
//         return{
//         info: data.data.info,
//         results: [
//             ...prevState.results,
//             ...data.data.results
//         ]

//     }})
//     })
//     .catch((err) => console.log(err));
// }

//   return (
//     <div>
//       <h1>Axios</h1>
//       {characters?.results &&
//         characters?.results.map((character) => (
//           <div key={character.id}>
//             <p>{character.name}</p>
//             <img src={character.image} alt="" />
//           </div>
//         ))}

//     {characters.info?.next !== null && <button onClick={getMore} >Get More</button> }
//     </div>
//   );
// };

// export default NewAxiosPage;
