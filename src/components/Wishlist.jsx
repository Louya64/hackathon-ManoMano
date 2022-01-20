import React, { useEffect, useState } from "react";
import axios from "axios";
// import wishlist from "../assets/backgrounds/wishlist.png";
import "../styles/_wishlist.scss";
import ProductCard from "./ProductCard";

const id_list = 10;

const Wishlist = () => {
  const [favorites, setFavorites] = useState();
  let productList = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/lists_products/${id_list}`)
      .then((res) => {
        res.data.map((product) => {
          axios
            .get(`http://localhost:8000/api/products/${product.id_product}`)
            .then((res) => {
              productList.push(res.data);
              setFavorites((favorites) => [...productList]);
            });
        });
      });
  }, []);
  console.log(favorites);

  return (
    <div className="wishlist">
      <div className="wishlist__containerProduct">
        {favorites &&
          favorites.map((product) => (
            <ProductCard
              key={product.id_product}
              image={require("../assets/productsImg/" + product.picture)}
              title={product.title}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
