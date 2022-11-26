import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Buy from "./components/Header/Buy";
import Sell from "./components/Header/Sell";
import Rent from "./components/Header/Rent";
import Favorites from "./components/Header/Favorites";
import Login from "./components/Header/Login";
import Signup from "./components/Header/Signup";
import Card from "./components/Main/Card";
import Data from "./components/Main/Data";

export const data = createContext();

function App() {
  const [favroites, setfavroites] = useState([]);
  return (
    <data.Provider value={{ favroites, setfavroites }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Buy" element={<Buy />}>
            Buy{" "}
          </Route>{" "}
          <Route path="/sell" element={<Sell />}>
            Sell{" "}
          </Route>{" "}
          <Route path="/rent" element={<Rent />}>
            Rent{" "}
          </Route>{" "}
          <Route path="/Favorites" element={<Favorites />}>
            Favorites{" "}
          </Route>{" "}
          <Route path="/Login" element={<Login />}>
            Login{" "}
          </Route>{" "}
          <Route path="/signup" element={<Signup />}>
            Signup{" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </data.Provider>
  );
}

export default App;
