import React from 'react';
import { HiOutlineX } from 'react-icons/hi'

const CartItem = (props) => {
  return (
    <div className="card my-4 shadow-sm border">
      <div className="row g-0 align-items-center">
        {/* Product Image */}
        <div className="col-md-3 col-4">
          <img
            src={props.img}
            alt="Product"
            className="img-fluid rounded-2"
            style={{
              width: '100%',
              aspectRatio: '1/1',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-9 col-8">
          <div className="card-body py-3">
            <div className="d-flex justify-content-between">
            <h6 className="card-title mb-2 text-uppercase fw-normal">
              {props.name || "Mens Cotton T-Shirt"}
            </h6>
<HiOutlineX
  className="rounded-circle bg-secondary-subtle text-muted p-1 fs-4"
  style={{ cursor: 'pointer' }}
  onClick={() => props.onRemove(props.id)}
/>

            </div>
            <p className="card-text small text-muted mb-3">
              {props.description || "Lightweight cotton t-shirt for summer season"}
            </p>

            <div className="d-flex flex-wrap align-items-center gap-2">
              <span className="badge bg-secondary px-3 py-2 fs-6 fw-normal rounded-1">
                Qty: {props.qty || 1}
              </span>
              <span className="text-dark fw-semibold">
                Price: ₹{props.price || 6770}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;