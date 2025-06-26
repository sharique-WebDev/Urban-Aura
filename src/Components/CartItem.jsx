import React from 'react';
import { HiOutlineX, HiPlus, HiMinus } from 'react-icons/hi';

const CartItem = (props) => {
  const handleDecrease = () => {
    if (props.qty > 1) {
      props.onDecrease(props.id);
    }
  };

  const handleIncrease = () => {
    props.onIncrease(props.id);
  };

  return (
    <div className="card my-4 shadow-sm border">
      <div className="row g-0 align-items-center">
        <div className="col-md-3 col-4">
          <img
            src={props.img}
            alt="Product"
            className="img-fluid rounded-2"
            style={{
              width: '100%',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="col-md-9 col-8">
          <div className="card-body py-3">
            <div className="d-flex justify-content-between">
              <h6 className="card-title mb-2 text-uppercase fw-normal">
                {props.name}
              </h6>
              <HiOutlineX
                className="rounded-circle bg-secondary-subtle text-muted p-1 fs-4"
                style={{ cursor: 'pointer' }}
                onClick={() => props.onRemove(props.id)}
              />
            </div>

            <p className="card-text small text-muted mb-3">
              {props.description}
            </p>

            <div className="d-flex flex-wrap align-items-center gap-2">
              <div className="d-flex align-items-center border rounded px-2 py-1 bg-secondary text-white">
                
                <HiMinus 
                  style={{cursor:'pointer'}}
                  onClick={handleDecrease}
                />
                <span className="mx-2">{props.qty}</span>
                
                <HiPlus
                  style={{cursor:'pointer'}}
                  onClick={handleIncrease}
                />
              </div>
              <span className="text-dark fw-semibold">
                Price: ₹{props.price * props.qty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;