import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "./WeatherApp.module.css";
import Loading from "./Loading";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  //SE EJECUTA SOLO CUANDO CARGA EL COMPONENTE
  useEffect(() => {
    loadInfo();
  }, []);

  // //SE EJECUTA SOLO CADA VEZ QUE SE ACTUALIZA EL COMPONENTE
  // useEffect(() => {
  //   document.title = `Weather | ${weather?.location.name ?? ''}`;
  // }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 2000);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

export default WeatherApp;
