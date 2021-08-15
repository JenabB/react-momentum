import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

import Time from "./components/Time";
import User from "./components/User";
import Weather from "./components/Weather";
import Todo from "./components/Todo";
import Quote from "./components/Quote";

const App = () => {
  const [condition, setCondition] = useState(1420440); //using default condition to prevent undefined
  const [backgorund, setBackground] = useState([]);

  //API key
  const client = createClient(
    "563492ad6f91700001000001f4437833d1ce4ef58f80595aa44d5417"
  );

  // eslint-disable-next-line
  useEffect(() => {
    //afternoon
    if (new Date().getHours() >= 15 && new Date().getHours() <= 19) {
      setCondition(1420440);
    }
    // night
    else if (new Date().getHours() > 19 || new Date().getHours() <= 4) {
      setCondition(1624438);
    }
    //morning
    else if (new Date().getHours() > 4 && new Date().getHours() < 12) {
      setCondition(2627315);
    }
    //day
    else if (new Date().getHours() < 15 && new Date().getHours() >= 12) {
      setCondition(358238);
    }
    client.photos.show({ id: condition }).then((photo) => {
      setBackground(photo.src.landscape);
    });
  });

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
