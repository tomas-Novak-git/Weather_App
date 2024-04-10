import React from 'react'
import styles from '../../utils/card.module.css'
import { WeatherResultContext } from '../Weather'


const Humidity = () => {
    const result = React.useContext(WeatherResultContext)
  return (
            <div className={styles.card}>
          <p className={styles.placeholder}>Humidity</p>
          {typeof result.main !== "undefined" ? 
          <p>{result.main.humidity} %</p>
          : 
          <p>---</p>
      }
        </div>
  )
}

export default Humidity