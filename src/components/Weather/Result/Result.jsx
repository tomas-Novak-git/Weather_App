import React from 'react'
import styles from "../../utils/card.module.css"
import { WeatherResultContext } from '../Weather'


const Result = () => {
    const result = React.useContext(WeatherResultContext);
  return (
        <div className={styles.card}>
        <h2 className={styles.placeholder}>Results for</h2>
          {typeof result.main !== "undefined" ? 
          <p>{result.name}</p>
          : 
          <p>---</p>
        }</div>
  )
}

export default Result