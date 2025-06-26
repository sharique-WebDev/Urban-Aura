import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MoreProdCard = (props) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  const productIndex = existingCart.findIndex(item => item.id === props.id);

  if (productIndex !== -1) {
    existingCart[productIndex].qty += 1;
  } else {
    const newItem = {
      id: props.id,
      image: props.image,
      name: props.name,
      description: props.description || "No description available",
      price: props.newPrice,
      qty: 1
    };
    existingCart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(existingCart));

  // ✅ Dispatch event to update Navbar cart count
  window.dispatchEvent(new Event('cart-updated'));

  alert(`${props.name} added to cart 🛒`);
};


  return (
    <div className={`card product-card`}>
      {/* IMAGE WRAPPER FOR HOVER */}
      <div className="img-wrapper position-relative overflow-hidden text-center align-items-center">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="product" className="img-fluid rounded-2" />
        </Link>

        <div className="btns text-center text-light position-absolute d-flex justify-content-center flex-md-row flex-column">
          <span
            className="bg-success w-100 py-2 d-md-block d-none text-white d-flex justify-content-center align-items-center"
            onClick={handleAddToCart}
          >
            Add to Cart
          </span>

          <span
            className="bg-primary w-100 py-2 d-md-block d-none text-white d-flex justify-content-center align-items-center"
            onClick={() => navigate(`/checkout/${props.id}`)}
          >
            Buy Now
          </span>

          <span
            className="bg-primary d-md-none d-block text-white d-flex justify-content-center align-items-center"
            onClick={() => navigate(`/product/${props.id}`)}
          >
            Checkout
          </span>

        </div>
      </div>

      {/* CARD BODY */}
      <div className={`card-body text-center rounded-bottom py-2 ${props.bgColor}`}>
        <h5 className="fw-normal my-1" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>{props.name}</h5>

        <span className="text-success fw-semibold">
          ₹{props.newPrice} <s className="small text-muted">₹{props.oldPrice}</s>
        </span>
      </div>
    </div>

  );
};

export default MoreProdCard;