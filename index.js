import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./App.js";
import Headtwo from "./headtwo.js";
import './All.css'
import './headtwo.css'
import './header.css'
import Main from "./main.js";
import './main.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Headtwo/>
    <Main/>
  </React.StrictMode>
);
