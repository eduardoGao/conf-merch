import React from 'react'

import Product from './Product'
import '../styles/components/Products.css'

function Products({ data }) {
    return (
        <div className='Products'>
            <div className="Products-items">
                {data.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default Products
