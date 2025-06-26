import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(savedCart);
    } catch (err) {
      console.error("Error reading cart:", err);
      setCartItems([]);
    }
  }, []);

  // Handle item removal
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cart-updated')); // ✅ Notify Navbar
  };

  // Handle increase
  const handleIncreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  // Handle decrease
  const handleDecreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const totalMRP = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = cartItems.length * 10;
  const platformFee = cartItems.length > 0 ? 20 : 0;
  const totalAmount = totalMRP + platformFee - discount;

  return (
    <div className='container-fluid cart'>
      <div className="text-center m-0 shadow-sm p-3">
        <span className="bg-primary-subtle px-2 py-1 rounded-1">Cart</span> ------------ <span>Address</span> ----------- <span>Payment</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {cartItems.length === 0 ? (
              <p className="text-muted my-4">🛒 Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  qty={item.qty}
                  onRemove={handleRemoveItem}
                  onIncrease={handleIncreaseQty}
                  onDecrease={handleDecreaseQty}
                />
              ))
            )}
          </div>

          <div className="col-lg-5 my-4">
            <h6 className='text-muted'>PRICE DETAILS ({cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''})</h6>
            <p className="text-muted d-flex justify-content-between my-1">
              <span>Total MRP</span>
              <span className="text-dark">₹{totalMRP}</span>
            </p>
            <p className="text-muted d-flex justify-content-between my-1">
              <span>Discount</span>
              <span className="text-success">-₹{discount}</span>
            </p>
            <p className="text-muted d-flex justify-content-between my-1">
              <span>Coupon Discount</span>
              <span className="text-primary">Apply coupon</span>
            </p>
            <p className="text-muted d-flex justify-content-between my-1">
              <span>Platform Fee</span>
              <span className="text-dark">₹{platformFee}</span>
            </p>
            <hr />
            <p className="fw-semibold d-flex justify-content-between my-1">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </p>
            <button className="btn btn-success w-100 rounded-0 mt-2" disabled={cartItems.length === 0}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;