import React, { useEffect, useState } from "react";
import TopNavBar from "./TopNavBar";
import CurrentWeatherBox from "./CurrentWeatherBox";
import WeatherCards from "./WeatherCards";

const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "45d0a50c88f8374ed6705520619f1d13";

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
        fetch(API_URL)
          .then((response) => response.json())
          .then((data) => {
            const { name } = data[0];
            getWeatherData(latitude, longitude);
          })
          .catch(() => {
            alert("An error occurred while fetching the city name!");
          });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            "Geolocation request denied. Please reset location permission to grant access again."
          );
        } else {
          alert("Geolocation request error. Please reset location permission.");
        }
      }
    );
  };

  const getWeatherData = async (latitude, longitude) => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <>
      {weatherData && (
        <div className="bg-[#4085ff] min-h-screen px-5 py-7 text-white flex flex-col">
          <TopNavBar data={weatherData} />
          <CurrentWeatherBox data={weatherData} />
          <WeatherCards data={weatherData} />
        </div>
      )}
    </>
  );
};

export default Homepage;
