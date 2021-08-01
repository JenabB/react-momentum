import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

import Time from "./components/Time";
import User from "./components/User";
import Weather from "./components/Weather";
import Todo from "./components/Todo";
import Quote from "./components/Quote";

const App = () => {
  const [condition, setCondition] = useState(1420440);
  const [backgorund, setBackground] = useState([]);
  const client = createClient(
    "563492ad6f91700001000001f4437833d1ce4ef58f80595aa44d5417"
  );

  useEffect(() => {
    if (new Date().getHours() <= 19 && new Date().getHours() >= 15) {
      setCondition(1420440);
    } else if (new Date().getHours() > 21 || new Date().getHours() <= 4) {
      setCondition(2129796);
    } else if (new Date().getHours() > 4 && new Date().getHours() < 12) {
      setCondition(3030459);
    } else if (new Date().getHours() < 15 && new Date().getHours() >= 12) {
      setCondition(1174108);
    }
    client.photos.show({ id: condition }).then((photo) => {
      setBackground(photo.src.landscape);
    });
  }, [client.photos, condition]);

  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${backgorund})`, backgroundSize: "cover" }}
    >
      <Weather />
      <Time />
      <Quote />
      <User />
      <Todo />
    </div>
  );
};

export default App;
