import React, { use, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "./moreProdData";

const Checkout = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        payment: ''
    })

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        const { name, email, phone, address, pincode, city, state, payment } = form;

        if(!name || !email || !phone || !address || !pincode || !city || !state || !payment) {
            setError('Please fill all the required fields.')
        }
    }

    const { productId } = useParams();
    const product = allProducts.find(item => item.id === parseInt(productId));

    if (!product) {
        return <div className="container py-5">Product not found.</div>
    }

    return (
        <div className="container checkout-section mb-5">
            <h2 className="mb-2" style={{fontFamily:'Lucida Handwriting, pacifico'}}>Checkout</h2>

            {/* product summary */}
            <div className="row">
                <div className="col-md-5 mb-4">
                    <div className="card">
                        <img src={product.image} alt={product.name} className="img-fluid rounded-3" style={{ height: "310px", objectFit: "contain" }} />
                        <div className="card-body bg-secondary-subtle">
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ₹{product.newPrice}</p>
                        </div>
                    </div>
                </div>

                {/* billing form */}
                <div className="col-md-7 rounded">
                    <form action="" className="bg-body-secondary p-3 rounded">
                        <div className="mb-3">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="e.g. 9876543210" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Shipping Address</label>
                            <input type="text" className="form-control" placeholder="Enter delivery address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Pincode</label>
                            <input type="number" className="form-control" placeholder="e.g. 800451" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">City</label>
                            <input type="text" className="form-control" placeholder="Enter your city" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">State</label>
                            <input type="text" className="form-control" placeholder="State name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Payment Method</label>
                            <select name="" className="form-select" id="">
                                <option value="">Select payment <option value=""></option></option>
                                <option value="card">Credit/Debit Card</option>
                                <option value="cod">Cash on Delivery</option>
                                <option value="upi">UPI / Wallet</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Card Number</label>
                            <input type="number" className="form-control" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>CVV</label>
                                <input type="password" className="form-control" placeholder="123" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Expiry Date</label>
                                <input type="text" className="form-control" placeholder="MM/YY" />
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning w-100" onClick={() => alert("✅ Order placed successfully!")}>
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;