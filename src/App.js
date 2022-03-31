import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";
import Inevntory from "./components/Inevntory/Inevntory";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inevntory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
