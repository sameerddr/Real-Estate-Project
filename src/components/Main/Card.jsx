import React, { createContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Favorites from "../Header/Favorites";
import "./Card.css";
function Cards({
  name,
  location,
  beds,
  bathrooms,
  price,
  size,
  img,
  setfavorites,
}) {
  const cardata = {
    name,
    location,
    beds,
    bathrooms,
    price,
    size,
    img,
  };
  return (
    <>
      <div className="cardsss" key={name}>
        <Card
          style={{
            width: "18rem",
            height: "550px",
            margin: "10px 20px",
            padding: "20px",
          }}>
          <div className="img">
            <Card.Img variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Location-:{location}</Card.Text>
            <Card.Text> Beds-:{beds}</Card.Text>
            <Card.Text>Bathrooms-:{bathrooms}</Card.Text>
            <Card.Text> Price-: ${price}</Card.Text>
            <button
              onClick={() => {
                setfavorites((prev) => [...prev, cardata]);
              }}>
              Add To Favourites
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;
