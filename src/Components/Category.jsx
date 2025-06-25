import React from 'react'
import CategoryItems from './CategoryItems'
import dataProduct from './categoryData'
// import ProductShow from './MoreProdCard'

const Popular = () => {
    return (
        <>
            <div className="container my-5" id='popular'>
                <h1 className="text-center" style={{ fontFamily: "Lucida Handwriting" }}>SHOP BY CATEGORY</h1>
                <hr className="my-4" />
                <div className="row">
                    {dataProduct.map((item, i) => (
                        <div className="col-lg-3 col-md-6 my-2" key={i}>
                            <CategoryItems
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                newPrice={item.newPrice}
                                category={item.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Popular;