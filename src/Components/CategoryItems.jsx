import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItems = (props) => {
    return (
        <>
            <div className="card category-items">
                <Link
                    to={`/${props.category}`}
                    className='text-white'
                >
                    <img src={props.image} className="card-img width-cover img-fluid" alt={props.name} />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title text-warning">{props.name}</h5>
                        <div className="card-text item-prices">
                            <h5>
                                <span className="small fw-normal">Starting</span> ₹{props.newPrice}
                            </h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CategoryItems;