import { React, useEffect } from "react";
import { SashaAction } from "../../../redux/actions/SashaAction";
import { getCharacter } from "../../sasha/axios/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { getByThunk } from "../../../redux/actions/SashaActionThunk";
import { getMoreByThunk } from "../../../redux/actions/SashaActionThunk";
import styles from "./ReduxThunk.module.css";

const SashaReduxThunk = () => {
  const dispatch = useDispatch();
  const Sasha = useSelector((state) => state.Sasha.items?.results);
  const info = useSelector((state) => state.Sasha.items?.info);
  const getCharacter = () => dispatch(getByThunk());
  const getMore = (url) => dispatch(getMoreByThunk(url));
  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    console.log(Sasha);
  }, [Sasha]);

  return (
    <div>
      <h3>Redux Thunk</h3>
      {Sasha &&
        Sasha?.map((item) => (
          <div key={item.id} className={styles.container}>
            <p> {item.name} </p>
            <img src={item.image} alt="" />
          </div>
        ))}
      <button className={styles.btn} onClick={() => getMore(info.next)}>
        Get More
      </button>
    </div>
  );
};
export default SashaReduxThunk;
