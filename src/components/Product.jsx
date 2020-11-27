import React from 'react'

function Product({ product, handleAddToCart }) {
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
                <h2>{product.title}
                    <span>${product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type='button' onClick={handleAddToCart(product)}>Add to cart</button>
        </div>
    )
}

export default Product
