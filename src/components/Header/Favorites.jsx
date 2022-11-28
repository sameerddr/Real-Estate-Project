import React from "react";
import { data } from "../../App";
import Card from "../Main/Card";
function Favorites({ favorites }) {
  return (
    <>
      {favorites?.map(
        ({ name, location, beds, bathrooms, price, size, img }) => (
          <div className="cardbox">
            <Card
              name={name}
              location={location}
              beds={beds}
              bathrooms={bathrooms}
              price={price}
              size={size}
              img={img}
            />
          </div>
        )
      )}
    </>
  );
}

export default Favorites;
