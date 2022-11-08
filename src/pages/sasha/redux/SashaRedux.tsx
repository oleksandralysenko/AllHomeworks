//@ts-ignore
import { React, useEffect } from "react";
import { SashaAction } from "../../../redux/actions/SashaAction";
import { getCharacter } from "../axios/ApiCalls";
import { getMore } from "../axios/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import styles from "./SashaRedux.module.css";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}

const SashaRedux = () => {
  const dispatch = useDispatch();
  const Sasha: Character[] = useSelector(
    (state: any) => state.Sasha.items?.results
  );
  const info = useSelector((state: any) => state.Sasha.items?.info);
  useEffect(() => {
    getCharacter().then((data) => {
      dispatch(SashaAction.adding(data.data));
    });
  }, []);

  const getNext = (url: string) => {
    getMore(url)
      .then((data) => {
        console.log(data.data);
        dispatch(SashaAction.more_adding(data.data));
        dispatch(SashaAction.error(null));
      })
      .catch((e) => {
        dispatch(SashaAction.error(e));
      })
      .finally(() => {
        dispatch(SashaAction.loading(false));
      });
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Redux</h1>
      <div className={styles.itemContainer}>
        {Sasha &&
          Sasha.map((item) => (
            <div key={item.id} className={styles.container}>
              <p> {item.name} </p>
              <img src={item.image} alt="" />
            </div>
          ))}
      </div>
      <button className={styles.btn} onClick={() => getNext(info.next)}>
        Get More
      </button>
    </div>
  );
};
export default SashaRedux;
