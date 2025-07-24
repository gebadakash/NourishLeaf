import React, { useState } from 'react';

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    townCity: '',
    country: '',
    postcode: '',
    mobile: '',
    email: '',
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: '',
    shippingMethod: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const orderData = {
      customerDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        address: formData.address,
        townCity: formData.townCity,
        country: formData.country,
        postcode: formData.postcode,
        mobile: formData.mobile,
        email: formData.email,
        createAccount: formData.createAccount,
        shipToDifferentAddress: formData.shipToDifferentAddress,
        orderNotes: formData.orderNotes,
      },
      orderItems: [
        {
          product: "Awesome Brocoli",
          price: 69.00,
          quantity: 2,
          total: 138.00,
          image: "img/vegetable-item-2.jpg"
        },
        {
          product: "Potatoes",
          price: 69.00,
          quantity: 2,
          total: 138.00,
          image: "img/vegetable-item-5.jpg"
        },
        {
          product: "Big Banana",
          price: 69.00,
          quantity: 2,
          total: 138.00,
          image: "img/vegetable-item-3.png"
        }
      ],
      subtotal: 414.00,
      shippingMethod: formData.shippingMethod,
      paymentMethod: formData.paymentMethod,
      total: 135.00 // This would be calculated based on shipping
    };

    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        // You might want to redirect or clear the form here
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Billing details</h1>
        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">First Name<sup>*</sup></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">Last Name<sup>*</sup></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">Company Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Address <sup>*</sup></label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="House Number Street Name" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Town/City<sup>*</sup></label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Country<sup>*</sup></label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Mobile<sup>*</sup></label>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">Email Address<sup>*</sup></label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-check my-3">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="Account-1" 
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
              </div>
              <hr />
              <div className="form-check my-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="Address-1" 
                  name="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
              </div>
              <div className="form-item">
                <textarea 
                  name="orderNotes" 
                  className="form-control" 
                  spellCheck="false" 
                  cols="30" 
                  rows="11" 
                  placeholder="Order Notes (Optional)"
                  value={formData.orderNotes}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{color:"gray", fontWeight:"500"}}>Products</th>
                      <th scope="col" style={{color:"gray", fontWeight:"500"}}>Name</th>
                      <th scope="col" style={{color:"gray", fontWeight:"500"}}>Price</th>
                      <th scope="col" style={{color:"gray", fontWeight:"500"}}>Quantity</th>
                      <th scope="col" style={{color:"gray", fontWeight:"500"}}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img src="/images/vegetable-item-2.jpg" className="img-fluid rounded-circle" style={{ width: '90px', height: '90px' }} alt="Awesome Brocoli" />
                        </div>
                      </th>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>Awesome Brocoli</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$69.00</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>2</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$138.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img src="/images/vegetable-item-5.jpg" className="img-fluid rounded-circle" style={{ width: '90px', height: '90px' }} alt="Potatoes" />
                        </div>
                      </th>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>Potatoes</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$69.00</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>2</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$138.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center mt-2">
                          <img src="/images/vegetable-item-3.png" className="img-fluid rounded-circle" style={{ width: '90px', height: '90px' }} alt="Big Banana" />
                        </div>
                      </th>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>Big Banana</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$69.00</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>2</td>
                      <td className="py-5" style={{color:"gray", fontWeight:"400"}}>$138.00</td>
                    </tr>
                    <tr>
                      <th scope="row">
                      </th>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <p className="mb-0 text-dark py-3">Subtotal</p>
                      </td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">$414.00</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                      </th>
                      <td className="py-5">
                        <p className="mb-0 text-dark py-4">Shipping</p>
                      </td>
                      <td colSpan="3" className="py-5">
                        <div className="form-check text-start">
                          <input 
                            type="radio" 
                            className="form-check-input bg-primary border-0" 
                            id="Shipping-1" 
                            name="shippingMethod"
                            value="Free Shipping"
                            onChange={handleChange}
                            checked={formData.shippingMethod === 'Free Shipping'}
                          />
                          <label className="form-check-label" htmlFor="Shipping-1" style={{color:"gray", fontWeight:"400"}}>Free Shipping</label>
                        </div>
                        <div className="form-check text-start">
                          <input 
                            type="radio" 
                            className="form-check-input bg-primary border-0" 
                            id="Shipping-2" 
                            name="shippingMethod"
                            value="Flat rate: $15.00"
                            onChange={handleChange}
                            checked={formData.shippingMethod === 'Flat rate: $15.00'}
                          />
                          <label className="form-check-label" htmlFor="Shipping-2" style={{color:"gray", fontWeight:"400"}}>Flat rate: $15.00</label>
                        </div>
                        <div className="form-check text-start">
                          <input 
                            type="radio" 
                            className="form-check-input bg-primary border-0" 
                            id="Shipping-3" 
                            name="shippingMethod"
                            value="Local Pickup: $8.00"
                            onChange={handleChange}
                            checked={formData.shippingMethod === 'Local Pickup: $8.00'}
                          />
                          <label className="form-check-label" htmlFor="Shipping-3" style={{color:"gray", fontWeight:"400"}}>Local Pickup: $8.00</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                      </th>
                      <td className="py-5">
                        <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                      </td>
                      <td className="py-5"></td>
                      <td className="py-5"></td>
                      <td className="py-5">
                        <div className="py-3 border-bottom border-top">
                          <p className="mb-0 text-dark">$135.00</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input 
                      type="radio" 
                      className="form-check-input bg-primary border-0" 
                      id="Transfer-1" 
                      name="paymentMethod"
                      value="Direct Bank Transfer"
                      onChange={handleChange}
                      checked={formData.paymentMethod === 'Direct Bank Transfer'}
                    />
                    <label className="form-check-label" htmlFor="Transfer-1">Direct Bank Transfer</label>
                  </div>
                  <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input 
                      type="radio" 
                      className="form-check-input bg-primary border-0" 
                      id="Payments-1" 
                      name="paymentMethod"
                      value="Check Payments"
                      onChange={handleChange}
                      checked={formData.paymentMethod === 'Check Payments'}
                    />
                    <label className="form-check-label" htmlFor="Payments-1">Check Payments</label>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input 
                      type="radio" 
                      className="form-check-input bg-primary border-0" 
                      id="Delivery-1" 
                      name="paymentMethod"
                      value="Cash On Delivery"
                      onChange={handleChange}
                      checked={formData.paymentMethod === 'Cash On Delivery'}
                    />
                    <label className="form-check-label" htmlFor="Delivery-1">Cash On Delivery</label>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                <div className="col-12">
                  <div className="form-check text-start my-3">
                    <input 
                      type="radio" 
                      className="form-check-input bg-primary border-0" 
                      id="Paypal-1" 
                      name="paymentMethod"
                      value="Paypal"
                      onChange={handleChange}
                      checked={formData.paymentMethod === 'Paypal'}
                    />
                    <label className="form-check-label" htmlFor="Paypal-1">Paypal</label>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                <button type="submit" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;