import { useState, useEffect } from "react";
import moment from "moment";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("HH:mm"));
    }, 1000);
  });

  return (
    <div className="text-center text-white">
      <h1 className="texl-4xl">{moment().format("dddd, MMMM D YYYY")}</h1>
      <h1 className=" text-6xl font-bold">{time}</h1>
    </div>
  );
};

export default Time;
