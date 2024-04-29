import React from 'react';
import API_KEY from '../utils/KEY/API_KEY';
import styles from './Weather.module.css';
import Result from './Result/Result';
import MinMaxTemp from './MinMaxTemp/MinMaxTemp';
import CurrentTemperature from './CurrentTemperature/CurrentTemperature';
import WeatherSituation from './WeatherSituation/WeatherSituation';
import Humidity from './Humidity/Humidity';


export const WeatherResultContext = React.createContext();

const Weather = () => {
const [value, setValue] = React.useState('');
const [result, setResult] = React.useState([{}]);




async function search(event) {
  if (event.key === "Enter" && value !== "") {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          setValue('');
          throw new Error("Invalid query. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || data.length === 0) {
          setValue('');
          throw new Error("Location not found. Please try again.");
        }
        return fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${API_KEY}`
        );
      })
      .then((response) => {
        if (!response.ok) {
          setValue('');
          throw new Error("Weather data not available. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
        setValue("");
        console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
      });
      
  }
}


  return (<>
        <div className={styles.heading}>
          <h1>Weather app</h1>
                <input onKeyDown={search} className={styles.inputWindow} id="weather-search" type='text' value={value} onChange={(event) => {setValue(event.target.value)}} placeholder='Location?' required={true}/>

        </div>
    <div className={styles.wrapper}>              
<WeatherResultContext.Provider value={result} >
          <Result />
          <WeatherSituation />
          <CurrentTemperature />
          <MinMaxTemp />
          <Humidity />
</WeatherResultContext.Provider>

    </div>
    </>
  )
}

export default Weather

