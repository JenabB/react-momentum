import React, { useState, useEffect } from "react";
import getImage from "./components/getImage";
import Time from "./components/Time";
import User from "./components/User";
const App = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    getImage().then((data) => setImage(data.src.landscape));
  }, []);
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <Time />
      <User />
    </div>
  );
};

export default App;
