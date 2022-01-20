import React from "react";
import wishlisthead from "../assets/backgrounds/header_ManoMano3.png";
import wishlistfooter from "../assets/backgrounds/footer_ManoMano3.png";
import Wishlist from "./Wishlist";
import WishListTab from "./WishListTab";

const WishlistPage = () => {
  return (
    <div className="wishlistPage">
      <img className="wishlistPage__img" src={wishlisthead} alt="" />
      <div className="wishlistPage__container">
        <div className="wishlistPage__container--left">
          <WishListTab activate={true} />
          <WishListTab activate={false} />
          <h1>My favorites</h1>
        </div>
        <Wishlist className="wishlistPage__container--right" />
      </div>
      <img className="wishlistPage__img" src={wishlistfooter} alt="" />
    </div>
  );
};

export default WishlistPage;
