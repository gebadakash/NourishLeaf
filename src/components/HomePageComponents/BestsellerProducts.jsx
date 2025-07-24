import React from "react";

const productsLeftImage = [
  { id: 1, name: "Organic Tomato", image: "/images/best-product-1.jpg", price: "3.12 $" },
  { id: 2, name: "Organic Tomato", image: "/images/best-product-2.jpg", price: "3.12 $" },
  { id: 3, name: "Organic Tomato", image: "/images/best-product-3.jpg", price: "3.12 $" },
  { id: 4, name: "Organic Tomato", image: "/images/best-product-4.jpg", price: "3.12 $" },
  { id: 5, name: "Organic Tomato", image: "/images/best-product-5.jpg", price: "3.12 $" },
  { id: 6, name: "Organic Tomato", image: "/images/best-product-6.jpg", price: "3.12 $" },
];

const productsCentered = [
  { id: 7, name: "Organic Tomato", image: "/images/fruite-item-1.jpg", price: "3.12 $" },
  { id: 8, name: "Organic Tomato", image: "/images/fruite-item-2.jpg", price: "3.12 $" },
  { id: 9, name: "Organic Tomato", image: "/images/fruite-item-3.jpg", price: "3.12 $" },
  { id: 10, name: "Organic Tomato", image: "/images/fruite-item-4.jpg", price: "3.12 $" },
];

const BestsellerProducts = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>

        <div className="row g-4">
          {productsLeftImage.map((product) => (
            <div key={product.id} className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={product.image} className="img-fluid rounded-circle w-100" alt="" />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">{product.name}</a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">{product.price}</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                      <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {productsCentered.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img src={product.image} className="img-fluid rounded" alt="" />
                <div className="py-4">
                  <a href="#" className="h5">{product.name}</a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">{product.price}</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BestsellerProducts;
