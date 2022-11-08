//@ts-ignore
import { React, useEffect, useState } from "react";
import { getCharacter, getMore } from "./ApiCalls";
//ts@ignore
import styles from "./SashaAxios.module.css";

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Data {
  items: {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: null;
    };
    results: [];
  };
}

const SashaAxios = () => {
  const [data, setData] = useState<any>();

  const getNext = () => {
    getMore(data?.info?.next);
    getCharacter().then((data) => {
      setData((prevState: any) => {
        return {
          info: data.data.info,
          results: [...prevState.results, ...data.data.results],
        };
      });
    });
  };

  useEffect(() => {
    getCharacter().then((data) => {
      setData(data.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.mainContainer}>
      <h1>AXIOS</h1>
      <div className={styles.itemContainer}>
        {data &&
          data.results.map((item: any) => (
            <div key={item.id} className={styles.container}>
              <p> {item.name} </p>
              <img src={item.image} alt="" />
            </div>
          ))}
      </div>
      {data?.info?.next !== null && (
        <button className={styles.btn} onClick={() => getNext()}>
          Get More
        </button>
      )}
    </div>
  );
};
export default SashaAxios;
