import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Data.css";
function Data() {
  const [data, setdata] = useState([]);
  const [favorites, setfavorites] = useState([]);

  const api = "https://frozen-harbor-02472.herokuapp.com/data";

  const getapi = async () => {
    const response = await axios.get(api);
    console.log(response);
    setdata(response.data);
  };

  useEffect(() => {
    getapi();
  }, []);
  console.log(favorites);
  return (
    <>
      {data?.map(({ name, location, beds, bathrooms, price, size, img }) => (
        <div className="cardbox">
          <Card
            name={name}
            location={location}
            beds={beds}
            bathrooms={bathrooms}
            price={price}
            size={size}
            img={img}
            setfavorites={setfavorites}
          />
        </div>
      ))}
    </>
  );
}

export default Data;
