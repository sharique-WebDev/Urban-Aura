import React from 'react'
import saleBanner from '../Assets/saleBanner.jpg'

const SummerSale = () => {
    return (
        <div className='container my-5 py-4'>
            <div className="row">
                <div className="col-md-6">
                    <img src={saleBanner} alt="sale banner" className='img-fluid rounded-4 sale-banner' style={{ height: "420px", width: "100%", objectFit: "cover"}} />
                </div>
                <div className="col-md-6 mt-lg-0 mt-4">
                    <h2 className='fw-bold display-6 mb-3 text-danger' style={{ fontFamily: "Lucida Handwriting, pacifico" }}>🔥 Summer Sale is On!</h2>
                    <p className='fs-5 text-dark my-lg-4'>
                        Get up to <strong>50% OFF</strong> on stylish summer outfits for men, women, and kids. Beat the heat with our coolest deals and refresh your wardrobe with breezy cottons, vibrant colors, and lightweight fashion essentials.
                    </p>
                    <ul className='list-unstyled fs-6 my-lg-4'>
                        <li>✅ Upto 50% off on summer collections</li>
                        <li className='my-2'>✅ Exclusive combo offers</li>
                        <li>✅ Limited-time free shipping</li>
                    </ul>
                    <button className="btn btn-lg btn-primary px-4 fw-semibold rounded-pill my-lg-2">
                        Shop Now
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SummerSale
