import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState(
    "http://openweathermap.org/img/wn/03d@2x.png"
  );

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const API_KEY_WEATHER = "a3347e3e736d7f4ffaa7a91b0638ddcc";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY_WEATHER}`;

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setIcon(
            `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          );
        })
        .catch((error) => console.log(error));

      intervalId = setTimeout(fetchData, 10000);
    };

    fetchData();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [url]);
  console.log(weather);

  return (
    <div className="text-center text-white pt-32">
      <div className="flex items-center justify-center text-white">
        <img src={icon} alt="weather" />
        {weather.main ? <h1>{weather.main.temp} &#176;C</h1> : <h1>Loading</h1>}
      </div>
      <h1 className="text-2xl font-bold">{weather.name}</h1>
    </div>
  );
};

export default Weather;
