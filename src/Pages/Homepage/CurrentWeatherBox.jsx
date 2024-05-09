import React from "react";
import { IoRainyOutline, IoWaterOutline } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";

const CurrentWeatherBox = ({ data }) => {
  return (
    <div className="py-6 flex-1 flex flex-col justify-around">
      <div className="flex flex-col items-center">
        <div>
          <img
            className="w-full mt-[-30px]"
            src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`}
            alt="rain"
          />
        </div>
        <div className="text-[7rem] mt-[-50px]">
          <span className="bg-gradient-to-b from-white to-transparent text-transparent font-extrabold bg-clip-text">
            {(data.list[0].main.temp - 273.15).toFixed(0)}&deg;C
          </span>
        </div>
        <div className="flex flex-col gap-3 text-2xl items-center justify-center">
          <span className="bg-white bg-opacity-30 rounded-md px-5 py-3 capitalize">
            {data.list[0].weather[0].description}
          </span>
          <span>
            Feels like {(data.list[0].main.feels_like - 273.15).toFixed(0)}
            &deg;C
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-7 text-center text-2xl">
        <div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-[-10px]">
              <IoRainyOutline />
              <span>{(data.list[0].pop * 100).toFixed(0)}%</span>
            </div>
            <p className="text-[.6rem]">Chance of rain</p>
          </div>
        </div>
        <div className="bg-gray-100 h-10 w-[.5px]"></div>
        <div>
          <div className="flex items-center justify-center gap-2 mb-[-10px]">
            <LuLeaf />
            <span>{data.list[0].clouds.all}%</span>
          </div>
          <p className="text-[.6rem]">Clouds</p>
        </div>
        <div className="bg-gray-100 h-10 w-[.5px]"></div>
        <div>
          <div className="flex items-center justify-center gap-2 mb-[-5px]">
            <IoWaterOutline />
            <span>{data.list[0].main.humidity}%</span>
          </div>
          <p className="text-[.6rem]">Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherBox;
