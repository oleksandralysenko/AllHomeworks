//@ts-ignore
import { React, useEffect } from "react";
import { SashaAction } from "../../../redux/actions/SashaAction";
import { getCharacter } from "../axios/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { getByThunk } from "../../../redux/actions/SashaActionThunk";
import { getMoreByThunk } from "../../../redux/actions/SashaActionThunk";
//@ts-ignore
import styles from "./ReduxThunk.module.css";


export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string
  },
  image: string
  episode: string[]
  url: string
  created: string
}

// export interface Info {
//   count: number,
//   pages: number
//   next: string
//   prev: null | string
// }

const SashaReduxThunk = () => {
  const dispatch = useDispatch();
  const Sasha:Character[] = useSelector((state:any) => state.Sasha.items?.results);
  const info = useSelector((state:any) => state.Sasha.items?.info);
  const getCharacter = () => dispatch<any>(getByThunk());
  const getMore = (url:string) => dispatch<any>(getMoreByThunk(url));
  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    console.log(Sasha);
  }, [Sasha]);

  return (
    <div className={styles.mainContainer}>
      <h1>Redux Thunk</h1>
      <div className={styles.itemContainer}>
      {Sasha &&
        Sasha?.map((item) => (
          <div key={item.id} className={styles.container}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
        </div>
      <button className={styles.btn} onClick={() => getMore(info.next)}>
        Get More
      </button>
    </div>
  );
};
export default SashaReduxThunk;
