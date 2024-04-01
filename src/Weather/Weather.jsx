import React from 'react';
import API_KEY from '../Weather/KEY/API_KEY';
import styles from '../Weather/Weather.module.css';



const Weather = () => {
const [value, setValue] = React.useState('');
const [result, setResult] = React.useState([{}]);

// async function search(event) {
//   if (event.key === "Enter" && value !== "") {
//   const response1 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${API_KEY}`);
//   const data1 = await response1.json();
//   const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data1.lat}&lon=${data1.lon}&appid=${API_KEY}`);
//   const data2 = await response2.json();
//   return setResult(data2)
//   }
// }

async function search(event){
  if (event.key === "Enter" && value !== "") {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=${API_KEY}`
      ).then((response) => response.json())
      .then((data) => {
         return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${API_KEY}`)
      }).then((response) => response.json())
      .then((data) => {
          setResult(data)
      });
   } }

  return (
    <div className={styles.wrapper}>
        <h1>Weather app</h1>
              <input onKeyDown={search} className={styles.inputWindow} id="weather-search" type='text' value={value} onChange={(event) => {setValue(event.target.value)}} placeholder='Location?' required={true}/>
        {typeof result.main !== "undefined" ? (
          <><p>{result.main.temp} °C</p>
          <p>{result.name}</p></>)
          : 
          (<p>nothing to show</p>)
        }
    </div>
  )
}

export default Weather