import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wishlist from "./components/Wishlist";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/> 
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
