import React, { useState } from "react";
import productReviews from "../assets/reviewsImg/perceuseReviews.png";
import emptyHeart from "../assets/PNG/emptyHeart.png";
import redHeart from "../assets/PNG/redHeart.png";
import { BsCheck2Circle } from "react-icons/bs";


const ProductCard = ({ title, image, price, review }) => {
  const [favoriteActive, setFavoriteActive] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          className="product-card__content__img"
          src={image}
          alt=""
        />
        <p className="product-card__content__title">
          {/* La tronçonneuse des mec de la pub Orangina, mais pourquoi sont ils si
          méchants ? */}
          {title}
        </p>
        <img
          className="product-card__content__reviews-img"
          src={productReviews}
          alt=""
        />
        <div className="product-card__content__price-favorite">
          <div className="product-card__content__price-favorite__price">
            <div className="product-card__content__price-favorite__price__number">
              £{price}
            </div>
            {/* <div className='product-card__content__price-favorite__price__euro'>
                            €
                        </div> */}
                        </div>
                    <div className='product-card__content__price-favorite__favorite-purchased'>
                        <div className='product-card__content__price-favorite__favorite-purchased__favorite'>
                        {!favoriteActive && (<img
                                className='product-card__content__price-favorite__favorite-purchased__favorite__empty-heart favorite'
                                src={emptyHeart}
                                alt="empty heart" />)}
                            {!favoriteActive && (<img
                                className='product-card__content__price-favorite__favorite-purchased__favorite__red-heart'
                                src={redHeart}
                                alt="red heart"
                                onClick={() => setFavoriteActive(!favoriteActive)} />)}
                            {favoriteActive && (<img
                                className='product-card__content__price-favorite__favorite-purchased__favorite__red-heart-still'
                                src={redHeart}
                                alt="red heart"
                                onClick={() => setFavoriteActive(!favoriteActive)} />)}
                        </div>
                        <div className='product-card__content__price-favorite__favorite-purchased__purchased'>
                            <BsCheck2Circle className='product-card__content__price-favorite__favorite-purchased__purchased__icon' /></div>
    
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
