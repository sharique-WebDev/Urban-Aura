import React, { useContext } from 'react'
import ProductDisplay from './ProductDisplay'
import { useParams } from 'react-router-dom'
import { ShopContext } from './ShopContext'

const Product = () => {
    const { allProducts } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProducts.find((e) => e.id === parseInt(productId));
    return (
        <>
            <ProductDisplay product={product} />
        </>
    )
}

export default Product