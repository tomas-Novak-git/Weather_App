import React from "react";
import styles from "../../utils/card.module.css";
import { WeatherResultContext } from "../Weather";

const MinMaxTemp = () => {
  const result = React.useContext(WeatherResultContext);
  return (
    <div className={styles.card}>
      <p className={styles.placeholder}>Min/Max temp.:</p>
      {typeof result.main !== "undefined" ? (
        <p>
          {Math.round(result.main.temp_min)}°C /{" "}
          {Math.round(result.main.temp_max)}°C
        </p>
      ) : (
        <p>---</p>
      )}
    </div>
  );
};

export default MinMaxTemp;
