import React from 'react'
import './Product.css';
function Product({ id, title, image, price, rating }) {
    return (
        <div className="product_card">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p>star</p>))}
                    
                </div>
            </div>

            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
