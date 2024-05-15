import React from "react";
import styles from "../../utils/card.module.css";
import { WeatherResultContext } from "../Weather";

const WeatherSituation = () => {
  const result = React.useContext(WeatherResultContext);
  return (
    <div className={styles.card}>
      <p className={styles.placeholder}>Weather Sit.:</p>
      {typeof result.main !== "undefined" ? (
        <p>{result.weather[0].description}</p>
      ) : (
        <p>---</p>
      )}
    </div>
  );
};

export default WeatherSituation;
