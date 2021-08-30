import { useState, useEffect } from "react";

const User = () => {
  let getName = localStorage.getItem("name")
    ? localStorage.getItem("name")
    : "Double click to add name";

  const [name, setName] = useState(getName);
  const [condition, setCondition] = useState("");

  const handleDoubleClick = () => {
    const name = prompt("Enter name");
    localStorage.setItem("name", name === "" ? "Name" : name);
    let newName = localStorage.getItem("name");
    setName(newName);
  };

  useEffect(() => {
    let intervalId;

    const getDay = () => {
      //afternoon
      if (new Date().getHours() >= 15 && new Date().getHours() <= 19) {
        setCondition("Afternoon");
      }
      //night
      else if (new Date().getHours() > 19 && new Date().getHours() <= 4) {
        setCondition("Night");
      }
      //dawn
      else if (new Date().getHours() > 4 && new Date().getHours() < 6) {
        setCondition("Dawn");
      }
      //Morning
      else if (new Date().getHours() >= 6 && new Date().getHours() < 9) {
        setCondition("Morning");
      }
      //tengah hari
      else if (new Date().getHours() >= 9 && new Date().getHours() < 15) {
        setCondition("Daylight");
      }

      intervalId = setTimeout(getDay, 3600000);
    };

    getDay();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [condition]);

  return (
    <div className="text-white text-center">
      <h2 className="text-2xl">
        Good {condition}
        <span
          className="cursor-pointer text-4xl font-bold"
          onDoubleClick={handleDoubleClick}
        >
          , {name}
        </span>
      </h2>
    </div>
  );
};

export default User;
