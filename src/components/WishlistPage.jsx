import { React, useEffect, useState } from "react";
import wishlisthead from "../assets/backgrounds/header_ManoMano3.png";
import wishlistfooter from "../assets/backgrounds/footer_ManoMano3.png";
import Wishlist from "./Wishlist";
import WishListTab from "./WishListTab";
import axios from "axios";

const WishlistPage = () => {
  const [lists, setLists] = useState([]);
  const [toDisplay, setToDisplay] = useState()
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/lists")
      .then((res) => res.data)
      .then((data) => setLists(data));
  }, []);
  console.log(lists,'TODISPLAY')
  return (
    <div className="wishlistPage">
      <img className="wishlistPage__img" src={wishlisthead} alt="" />
      <div className="wishlistPage__container">
        <div className="wishlistPage__container--left">
          <h1 id="myfav">My favorites</h1>
          {lists &&
            lists.map((el) => {
              return (
                <WishListTab
                  name={el.name}
                  key={el.id_list}
                  activate={el.id_list === 1 ? true : false}
                  setTodisplay={setToDisplay}
                  id={el.id_list}
                />
              );
            })}
        </div>
        <Wishlist toDisplay={toDisplay} className="wishlistPage__container--right" />
      </div>
      <img className="wishlistPage__img" src={wishlistfooter} alt="" />
    </div>
  );
};

export default WishlistPage;
