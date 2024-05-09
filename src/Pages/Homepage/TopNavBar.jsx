import React from "react";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdMore } from "react-icons/io";

const TopNavBar = ({ data }) => {
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

    return `${dayOfWeek}, ${monthName} ${day}`;
  }

  return (
    <div className="flex justify-center items-center">
      {/* <div className="bg-white bg-opacity-30 p-1.5 rounded-full text-2xl">
        <a>
          <FaPlus />
        </a>
      </div> */}
      <div className="text-center">
        <p className="text-xl">{data.city.name}</p>
        <p className="text-sm">{formatDate(data.list[0].dt_txt.split(" ")[0])}</p>
      </div>
      {/* <div className="bg-white bg-opacity-30 p-1.5 rounded-full text-2xl">
        <a>
          <IoMdMore />
        </a>
      </div> */}
    </div>
  );
};

export default TopNavBar;
