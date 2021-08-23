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

  useEffect(() => {
    let intervalId;

    const getTime = () => {
      //afternoon || sore
      if (new Date().getHours() >= 15 && new Date().getHours() <= 19) {
        setCondition(1420440);
      }
      // night || malam
      else if (new Date().getHours() > 19 || new Date().getHours() <= 4) {
        setCondition(1624438);
      }
      //dawn || subuh
      else if (new Date().getHours() > 4 && new Date().getHours() < 6) {
        setCondition(2627315);
      }

      //morning || pagi
      else if (new Date().getHours() >= 6 && new Date().getHours() < 9) {
        setCondition(358238);
      }

      //day || tengah hari
      else if (new Date().getHours() >= 9 && new Date().getHours() < 15) {
        setCondition(358238);
      }
      client.photos.show({ id: condition }).then((photo) => {
        setBackground(photo.src.landscape);
      });

      intervalId = setTimeout(getTime, 3600000);
    };

    getTime();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
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
