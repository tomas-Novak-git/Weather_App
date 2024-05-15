import React from "react";
import styles from "./Result.module.css";
import { WeatherResultContext } from "../Weather";

const Result = () => {
  const result = React.useContext(WeatherResultContext);
  return (
    <div className={styles.resultHeading}>
      <p>Results for:</p>
      {typeof result.main !== "undefined" ? (
        <p className={styles.resultName}>{result.name}</p>
      ) : (
        <p>---</p>
      )}
    </div>
  );
};

export default Result;
