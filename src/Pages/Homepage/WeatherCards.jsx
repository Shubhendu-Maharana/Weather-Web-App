import React from "react";

const WeatherCards = ({ data }) => {
  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Months are zero-based
    const day = parseInt(dateParts[2]);

    const formattedDate = new Date(year, month, day);

    const dayOfWeek = daysOfWeek[formattedDate.getDay()];
    const monthName = months[formattedDate.getMonth()];

    return `${dayOfWeek}`;
  }

  function formatTime(inputTime) {
    const [hours, minutes, seconds] = inputTime.split(":").map(Number);
    const twelveHourFormat = hours % 12 || 12;
    return `${twelveHourFormat}:00`;
  }

  const uniqueForecastDays = [];
  const fiveDaysForecast = data.list.filter((forecast) => {
    const forecastDate = new Date(forecast.dt_txt).getDate();
    if (!uniqueForecastDays.includes(forecastDate)) {
      return uniqueForecastDays.push(forecastDate);
    }
  });

  return (
    <div>
      <div className="text-lg px-2">
        <span>Next 5 days</span>
      </div>
      <div className="flex gap-4 text-lg text-center pt-5 overflow-auto no-scrollbar lg:justify-around">
        {fiveDaysForecast.map((card, index) =>
          index !== 0 ? (
            <div
              className="bg-white bg-opacity-30 px-5 py-4 rounded-[25px] flex flex-col items-center gap-1 min-w-36 lg:w-20"
              key={index}
            >
              <p>{formatDate(card.dt_txt.split(" ")[0])}</p>
              <img
                className="w-full flex-1"
                src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@4x.png`}
                alt=""
              />
              <p>{(card.main.temp - 273.15).toFixed(0)}&deg;C</p>
            </div>
          ) : null
        )}

        {/* <div className="bg-white bg-opacity-30 px-5 py-4 rounded-[25px] flex flex-col gap-1">
          <p>11:00</p>
          <img className="w-10" src="/weather-icons/rain.png" alt="" />
          <p>22&deg;C</p>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherCards;
