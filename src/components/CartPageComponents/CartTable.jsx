import React, { useState } from 'react';

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Big Banana',
      price: 2.99,
      image: '/images/vegetable-item-3.png',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Potatoes',
      price: 2.99,
      image: '/images/vegetable-item-5.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Awesome Broccoli',
      price: 2.99,
      image: '/images/vegetable-item-2.jpg',
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 3.0;
  const total = subtotal + shipping;

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: '80px', height: '80px' }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">{item.name}</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">${item.price.toFixed(2)}</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                      <div className="input-group-btn">
                        <button
                          className="btn btn-sm btn-minus rounded-circle bg-light border"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        value={item.quantity}
                        readOnly
                      />
                      <div className="input-group-btn">
                        <button
                          className="btn btn-sm btn-plus rounded-circle bg-light border"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </td>
                  <td>
                    <button
                      className="btn btn-md rounded-circle bg-light border mt-4"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <input
            type="text"
            className="border-0 border-bottom rounded me-5 py-3 mb-4"
            placeholder="Coupon Code"
          />
          <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
            Apply Coupon
          </button>
        </div>

        <div className="row g-4 justify-content-end">
          <div className="col-8"></div>
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded">
              <div className="p-4">
                <h1 className="display-6 mb-4">
                  Cart <span className="fw-normal">Total</span>
                </h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">${subtotal.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <p className="mb-0">Flat rate: ${shipping.toFixed(2)}</p>
                </div>
                <p className="mb-0 text-end">Shipping to Ukraine.</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">${total.toFixed(2)}</p>
              </div>
              <button
                className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                type="button"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
