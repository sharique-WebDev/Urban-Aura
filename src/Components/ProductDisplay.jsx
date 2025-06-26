import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  const navigate = useNavigate();

  const images = [product.image, product.image1, product.image2].filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(30);

  const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  const productIndex = existingCart.findIndex(item => item.id === product.id);

  if (productIndex !== -1) {
    existingCart[productIndex].qty += 1;
  } else {
    const newItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      description: product.description || "No description available",
      price: product.newPrice,
      qty: 1
    };
    existingCart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(existingCart));

  // ✅ Dispatch custom event so Navbar updates immediately
  window.dispatchEvent(new Event('cart-updated'));

  alert(`${product.name} added to cart 🛒`);
};


  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <div className='container particular-product mb-5'>
      <div className="row">
        {/* Left: Images */}
        <div className="col-lg-6">
          <div className="row">
            <div className="col-3 side-img">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`img-fluid my-1 width-cover border border-2 ${activeIndex === idx ? 'border-info' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <div className="col-9 d-flex justify-content-center align-items-center">
              <img
                src={images[activeIndex]}
                alt={`Main ${activeIndex + 1}`}
                className="img-fluid main-image width-cover border border-2"
              />
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="col-lg-6 prod-details">
          <h3 className="prod-name mt-1">{product.name}</h3>
          <p className="text-muted">{product.description}</p>

          {/* Rating */}
          <div className="ratings mb-3">
            <span className="border-1 border-secondary border px-2 py-1 rounded">
              4.4 <FaStar className='text-warning' /> | 9 reviews
            </span>
          </div>

          {/* Sizes */}
          <div className="sizes d-flex align-items-center gap-2 mb-3">
            {[30, 32, 34, 36].map((size, index) => (
              <span
                key={index}
                className={`rounded-circle border border-dark d-flex align-items-center justify-content-center ${selectedSize === size ? 'bg-danger-subtle' : ''}`}
                style={{ width: 40, height: 40, cursor: 'pointer' }}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>

          {/* Price */}
          <h4 className="price">
            ₹{product.newPrice}{' '}
            <span className="text-muted small fw-normal">
              MRP <s>₹{product.oldPrice}</s>
            </span>
            <p className="text-success p-0 fs-6 fw-normal">inclusive of all taxes</p>
          </h4>

          {/* Buttons */}
          <button className="btn btn-danger" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="btn btn-primary ms-2" onClick={handleBuyNow}>
            Buy Now
          </button>

          {/* Additional Info Sections */}
          <div className="offers mt-4">
            <h6 className="fw-bold">Available Offers</h6>
            <ul className="list-unstyled small">
              <li>🔖 10% off on orders above ₹1500</li>
              <li>💳 ₹100 off with HDFC Credit Cards</li>
              <li>🚚 Free delivery on your first purchase</li>
            </ul>
          </div>

          <div className="highlights mt-4">
            <h6 className="fw-bold">Product Highlights</h6>
            <ul className="list-unstyled small">
              <li>✔️ Premium quality fabric for all-day comfort</li>
              <li>✔️ Designed for a modern and elegant look</li>
              <li>✔️ Durable stitching and long-lasting material</li>
              <li>✔️ Easy to wash and maintain</li>
              <li>✔️ Suitable for casual and festive occasions</li>
            </ul>
          </div>

          <div className="delivery-info mt-4 small">
            <p><strong>Delivery:</strong> Estimated by <u>Tuesday, June 20</u></p>
            <p><strong>Return Policy:</strong> Easy 7-day return and exchange</p>
          </div>

          <div className="text-danger fw-bold mt-2 small">🔥 Only 4 left in stock!</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;