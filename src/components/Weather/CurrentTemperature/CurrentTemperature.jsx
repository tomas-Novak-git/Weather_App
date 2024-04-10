import React from 'react'
import { WeatherResultContext } from '../Weather'
import styles from '../../utils/card.module.css'

const CurrentTemperature = () => {
    const result = React.useContext(WeatherResultContext);
  return (
        <div className={styles.card}>
          <p className={styles.placeholder}>Current temp.:</p>
          {typeof result.main !== "undefined" ? 
          <p>{Math.round(result.main.temp)} °C</p>
          : 
          <p>---</p>
        }
        </div>
  )
}

export default CurrentTemperature