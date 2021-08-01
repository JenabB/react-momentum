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
    if (new Date().getHours() <= 19 && new Date().getHours() >= 15) {
      setCondition("Evening");
    } else if (new Date().getHours() > 21 || new Date().getHours() <= 4) {
      setCondition("Night");
    } else if (new Date().getHours() > 4 && new Date().getHours() < 12) {
      setCondition("Morning");
    } else if (new Date().getHours() < 15 && new Date().getHours() >= 12) {
      setCondition("Afternoon");
    }
  }, []);

  return (
    <div className="text-white text-center">
      <h2>
        Good {condition},
        <span className="cursor-pointer" onDoubleClick={handleDoubleClick}>
          {name}
        </span>
      </h2>
    </div>
  );
};

export default User;
