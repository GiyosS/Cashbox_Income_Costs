import React from "react";

import { BrowserRouter, Link } from "react-router-dom";

import { Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Chiqim from "./Components/Chiqim";
import Diagramma from "./Components/Diagramma";
import Foydalanuvchi from "./Components/Foydalanuvchi";
import Kassa from "./Components/Kassa";
import Kirim from "./Components/Kirim";
import Pul from "./Components/Pul";

function App(props) {
  return (
    <BrowserRouter>
      <div className={"container mt-5"}>
        <Link to={"/Cashbox"}>
          <button className={"btn btn-dark float-left m-1"}>Cashbox </button>
        </Link>
        <Link to={"/Income"}>
          <button className={"btn btn-dark float-left m-1"}>Income</button>
        </Link>
        <Link to={"/Costs"}>
          <button className={"btn btn-dark float-left m-1"}>Costs</button>
        </Link>
        <Link to={"/Money"}>
          <button className={"btn btn-dark float-left m-1"}>Money</button>
        </Link>
        <Link to={"/User"}>
          <button className={"btn btn-dark float-left m-1"}>User</button>
        </Link>
        <Link to={"/Diagramma"}>
          <button className={"btn btn-dark float-left m-1"}>Diagram</button>
        </Link>
        <br />
        <hr />
        <br />
        <Routes>
          <Route path="Cashbox" element={<Kassa />} />
          <Route path="Income" element={<Kirim />} />
          <Route path="Costs" element={<Chiqim />} />
          <Route path="Money" element={<Pul />} />
          <Route path="User" element={<Foydalanuvchi />} />
          <Route path="Diagramma" element={<Diagramma />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
