import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import productReviews from "../assets/reviewsImg/perceuseReviews.png";
import emptyHeart from "../assets/PNG/emptyHeart.png";
import redHeart from "../assets/PNG/redHeart.png";
import { BsCheck2Circle } from "react-icons/bs";


const ProductCard = ({ title, image, price, id_product }) => {
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [wishlistSelect, setWishlistSelect] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [createList, setCreateList] = useState(false);
  const [listName, setListName] = useState("");
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (wishlistSelect && ref.current && !ref.current.contains(e.target)) {
        setWishlistSelect(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [wishlistSelect])

  const handleAddProduct = (idList) => {
    axios.post(`http://localhost:8000/api/lists_products`, {id_product: id_product, id_list: idList}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    })
    setFavoriteActive(true);
    setWishlistSelect(false); 
  }

  const handleCreateList = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/lists`, {id_user: 1, name: listName}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
    setCreateList(false);
  }

  useEffect(() => {
    id_product && axios.get(`http://localhost:8000/api/lists_products/products/${id_product}`)
    .then((res) => res.data)
    .then((data) => data.length ? setFavoriteActive(true) : "")
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/lists`)
    .then((res) => res.data)
    .then((data) => setWishlists(data))
  }, [createList, wishlistSelect])

  return (
    <div className="extend">
      <div className="extend__product-card">
        <div className="extend__product-card__content">
          <img
            className="extend__product-card__content__img"
            src={image}
            alt=""
          />
          <p className="extend__product-card__content__title">
            {/* La tronçonneuse des mec de la pub Orangina, mais pourquoi sont ils si
            méchants ? */}
            {title}
          </p>
          <img
            className="extend__product-card__content__reviews-img"
            src={productReviews}
            alt=""
          />
          <div className="extend__product-card__content__price-favorite">
            <div className="extend__product-card__content__price-favorite__price">
              <div className="extend__product-card__content__price-favorite__price__number">
                £{price}
              </div>
            </div>
            <div className='extend__product-card__content__price-favorite__favorite-purchased'>
              <div className='extend__product-card__content__price-favorite__favorite-purchased__favorite'>
              {!favoriteActive && (<img
                      className='extend__product-card__content__price-favorite__favorite-purchased__favorite__empty-heart favorite'
                      src={emptyHeart}
                      alt="empty heart" />)}
                  {!favoriteActive && (<img
                      className='extend__product-card__content__price-favorite__favorite-purchased__favorite__red-heart'
                      src={redHeart}
                      alt="red heart"
                      onClick={() => {setWishlistSelect(!wishlistSelect); setCreateList(false)}} />)}
                  {favoriteActive && (<img
                      className='extend__product-card__content__price-favorite__favorite-purchased__favorite__red-heart-still'
                      src={redHeart}
                      alt="red heart"
                      onClick={() => setFavoriteActive(!favoriteActive)} />)}
              </div>
              <div className='extend__product-card__content__price-favorite__favorite-purchased__purchased'>
                  <BsCheck2Circle className='extend__product-card__content__price-favorite__favorite-purchased__purchased__icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {wishlistSelect && (<div className="extend__list-div" ref={ref}>
                <ul className="extend__list-div__ul">
                  <li className="extend__list-div__ul__create-li">
                    {!createList ? (<button 
                    className="extend__list-div__ul__create-li__button"
                    onClick={() => setCreateList(!createList)}>
                      Create a new wishlist +
                    </button>) : (<form>
                      <input
                      className="input-create"
                      onChange={(e) => setListName(e.target.value)}
                      placeholder="Please enter a list name">
                      </input>
                      <button onClick={(e) => handleCreateList(e)}>👌</button></form>)}
                  </li>
                  {wishlists && wishlists.map((list, index) =>
                  (<li
                  key={index}
                  className="extend__list-div__ul__list-li"
                  onClick={() => handleAddProduct(list.id_list)}
                  >{list.name}</li>))}
                </ul>
              </div>)}  
    </div>
  );
};

export default ProductCard;
