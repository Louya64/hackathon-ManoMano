import React from 'react';
import productReviews from "../assets/reviewsImg/perceuseReviews.png";

const HorizontalCard = ({ title, image, price }) => {
    return (
        <div className='horizontal-card'>
            <div className='horizontal-card__content'>
                <div className='horizontal-card__content__image'><img src={image} alt="" /></div>
                <div className='horizontal-card__content__product-description'>
                    <p className='horizontal-card__content__product-description__title'>{title}</p>
                    <div className='horizontal-card__content__product-description__review'><img src={productReviews} alt="" /></div>
                    <p className='horizontal-card__content__product-description__quantity'>Quantity : 1</p>
                    <p className='horizontal-card__content__product-description__ref'>Ref :ME5485642135</p>
                </div>
                <div className='horizontal-card__content__price-buttons'>
                    <div className='horizontal-card__content__price-buttons__price'>
                        {`£${price}`}
                    </div>
                    <div className='horizontal-card__content__price-buttons__buttons'>
                        <button className='horizontal-card__content__price-buttons__buttons__button-add'>
                            Add to card
                        </button>
                        <button className='horizontal-card__content__price-buttons__buttons__button-delete'>
                            Delete from list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;