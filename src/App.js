import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Buy from "./components/Header/Buy";
import Sell from "./components/Header/Sell";
import Favorites from "./components/Header/Favorites";
import Data from "./components/Main/Data";

import "./App.css";

function App() {
  const [favorites, setfavorites] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Buy" element={<Buy />}>
            Buy
          </Route>
          <Route path="/sell" element={<Sell />}>
            Sell
          </Route>
          <Route
            path="/"
            element={
              <Data favorites={favorites} setfavorites={setfavorites} />
            }></Route>
          <Route
            path="/Favorites"
            element={<Favorites favorites={favorites} />}>
            Favorites
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
