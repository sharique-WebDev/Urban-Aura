import React from 'react'
import { Link } from 'react-router-dom'
import { FaShippingFast, FaExchangeAlt, FaHeadset, FaBoxes, FaGift } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container-fluid pt-5 pb-4 bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6 mt-lg-0 mt-2">
                        <h6 className="fs-6">About Us</h6>
                        <p className="text-muted my-0">
                            <span className="brand-name">Urban Aura</span> is your destination for trendy, quality fashion. We blend style and comfort, offering the best picks for every season and personality.
                        </p>
                    </div>
                    <div className="col-lg-2 col-6 d-flex flex-column gap-1 mt-lg-0 mt-2">
                        <h6 className="fs-6">Online shopping</h6>
                        <span className='text-muted'>Home</span>
                        <span className='text-muted'>Mens</span>
                        <span className='text-muted'>Womens</span>
                        <span className='text-muted'>Kids</span>
                        <span className='text-muted'>Casuals</span>
                    </div>
                    <div className="col-lg-2 col-6 d-flex flex-column gap-1 mt-lg-0 mt-4">
                        <h6 className="fs-6">Customer Policies</h6>
                        <span className='text-muted'>Contact us</span>
                        <span className='text-muted'>Terms of use</span>
                        <span className='text-muted'>Track orders</span>
                        <span className='text-muted'>Privacy policy</span>
                        <span className='text-muted'>FAQs</span>
                    </div>
                    <div className="col-lg-2 col-6 d-flex flex-column gap-1 mt-lg-0 mt-4">
                        <h6 className="fs-6">Our Services</h6>
                        <span className='text-muted d-flex align-items-center gap-2'>
                            <FaShippingFast /> Free Shipping
                        </span>
                        <span className='text-muted d-flex align-items-center gap-2'>
                            <FaExchangeAlt /> Easy Returns
                        </span>
                        <span className='text-muted d-flex align-items-center gap-2'>
                            <FaHeadset /> 24/7 Support
                        </span>
                        <span className='text-muted d-flex align-items-center gap-2'>
                            <FaBoxes /> Bulk Orders
                        </span>
                        <span className='text-muted d-flex align-items-center gap-2'>
                            <FaGift /> Gift Cards
                        </span>
                    </div>
                    
                    <div className="col-lg-3  mt-lg-0 mt-4">
                        <h6 className="fs-6">Popular Searches</h6>
                        <p className="small text-muted">
                            Summer Dresses | Men's Jackets | Casual Shirts | Ethnic Wear | Kids Clothing | Hoodies | Kurtis | Jeans | Trendy Tops | Party Wear | Comfortable Footwear | Formal Shirts | Sarees | Crop Tops | Sneakers | Co-ord Sets
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-muted mt-5 text-center">
                Copyright © 2025 URBAN AURA - Design by <a href="" className="text-dark text-decoration-none">Sharique</a> | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer
