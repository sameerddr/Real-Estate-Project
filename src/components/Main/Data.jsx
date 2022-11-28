import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import Button from "react-bootstrap/Button";

import "./Data.css";

function Data({ favorites, setfavorites }) {
  const [data, setdata] = useState([]);

  const [search, setsearch] = useState({
    price: "",
    locname: "",
    date: "",
    type: "",
    search: "",
  });

  const [ogData, setogData] = useState([]);

  const api = "https://frozen-harbor-02472.herokuapp.com/data";


  const getapi = async () => {
    const response = await axios.get(api);
    setdata(response.data);
    setogData(response.data);
  };

  const handleSearch = () => {
    let splitprice = search.price.split("-");

    const filterData = ogData.filter((searchvalue) => {
      console.log(new Date(search.date).getTime() >=  new Date(searchvalue.date).getTime());
      let date1= new Date(search.date).getTime();
      let date2=new Date(searchvalue.date).getTime();
      if (
        searchvalue.name.toLowerCase().includes(search.search.toLowerCase()) &&
          searchvalue.location
            .toLowerCase()
            .includes(search.locname.toLowerCase()) &&
            ((parseInt(splitprice[0]) <= searchvalue.price &&
            parseInt(splitprice[1]) >= searchvalue.price) || search.price=="") &&
            (searchvalue.type === search.type || search.type ==="") && 
            (date1>=date2 || search.date=="") 
      ) {
        return search;
      }
    });
    setdata(filterData);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setsearch({
      ...search,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>

      <div className="main">
        <div className="list1">
           <h1 className="head">Search Property to Rent</h1>
          <input
            type="text"
            placeholder="Enter House Name"
            id="searchinput"
            name="search"
            onChange={handleChange}
          />
        </div>

        <div className="drops">
          <div className="location">
            <h6>Location</h6>
            <input
              type="text"
              className="loc"
              placeholder="Enter Address"
              name="locname"
              onChange={handleChange}
            />
          </div>

          <div className="date">
            <h6>Enter Date </h6>
            <input type="date" id="dateinput"  name="date"  onChange={handleChange} />
          </div>

          <div className="Price">
             <h6>Price</h6>
            <select id="dropdown" name="price" onChange={handleChange}>
              <option value="N/A">Price</option>
              <option value="1000-10000" name="price">
                1000-10000
              </option>
              <option value="10001-20000" name="price">
                10001-20000
              </option>
              <option value="20001- 40000" name="price">
                20001- 40000
              </option>
            </select>
          </div>

          <div className="property">
            <h6>Property Type</h6>
            <select id="dropdown"  name="type" onChange={handleChange}>
              <option value="House" name="type">
                House
              </option>
              <option value="Cottage" name="type">
                Cottage
              </option>
              <option value="Bangalow" name="type">
                Bangalow
              </option>
              <option value="Building" name="type">
                Building
              </option>
            </select>

          </div>
          <Button
            variant="outline-danger"
            className="searchbtn"
            onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>

      <br />
      {data.length ?data.map(({ name, location, beds, bathrooms, price, size, img,date }) => (
        <div className="cardbox">
          <Card
            name={name}
            location={location}
            beds={beds}
            bathrooms={bathrooms}
            price={price}
            size={size}
            img={img}
            date={date}
            setfavorites={setfavorites}
            favorites={favorites}
            isButton={true}
          />
        </div>
      )):"No Data Found"}

    </>
  );
}

export default Data;
