import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Card.css";

function Cards({
  name,
  location,
  beds,
  bathrooms,
  price,
  size,
  img,
  date,
  setfavorites,
  favorites,
  isButton,
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
            height: "540px",
            margin: "10px 20px",
            padding: "10px",
          }}>

          <div className="img">
            <Card.Img variant="top" src={img} />
          </div>

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Location-:{location}</Card.Text>

            <div className="list">
              <Card.Text>
                <i className="fa-solid fa-bed"></i> = {beds}
              </Card.Text>
              <Card.Text>
                <i className="fa-solid fa-toilet"></i> = {bathrooms}
              </Card.Text>
              <Card.Text>
                Price-: $ <b>{price}</b>
              </Card.Text> <br />
              
            </div>
            <Card.Text>
                Date-:<b>{date}</b>
              </Card.Text>

            {isButton ? (
              <Button
                variant="outline-dark"
                onClick={() => {
                  setfavorites([...favorites, cardata]);
                }}>
                Add to Favrouites
              </Button>
            ) : null}

          </Card.Body>

        </Card>
      </div>
    </>
  );
}

export default Cards;
