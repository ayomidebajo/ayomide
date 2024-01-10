import React from "react";
import Home from "./Components/home";
import "./styles/style.css";
import { useRoutes, Route, Routes } from "react-router-dom";

function App() {
let element = useRoutes([{
  path: "/",
  element: <Home />
}])

  return element;
}

export default App;
