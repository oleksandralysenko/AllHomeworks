import { React, useEffect } from "react";
import { SashaAction } from "../../../redux/actions/SashaAction";
import { getCharacter } from "../axios/ApiCalls";
import { getMore } from "../axios/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SashaRedux.module.css";

const SashaRedux = () => {
  const dispatch = useDispatch();
  const Sasha = useSelector((state) => state.Sasha.items?.results);
  const info = useSelector((state) => state.Sasha.items?.info);
  useEffect(() => {
    getCharacter().then((data) => {
      dispatch(SashaAction.adding(data.data));
    });
  }, []);

  const getNext = (url) => {
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
    <div>
      <h1>Redux</h1>
      {Sasha &&
        Sasha.map((item) => (
          <div key={item.id} className={styles.container}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
      <button className={styles.btn} onClick={() => getNext(info.next)}>
        Get More
      </button>
    </div>
  );
};
export default SashaRedux;
