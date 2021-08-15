import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState([]);

  const url = "https://api.quotable.io/random"; //random photo url

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      //using interval to change quote every 1 hour
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setQuote(data);
        })
        .catch((error) => console.log(error));

      intervalId = setTimeout(fetchData, 3600000);
    };

    fetchData();

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [url]);

  return (
    <div className="text-white text-center">
      <h1>
        {quote.content}
        <span>- {quote.author}</span>
      </h1>
    </div>
  );
};

export default Quote;
