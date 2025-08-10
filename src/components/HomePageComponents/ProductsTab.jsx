import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const productsData = [
  {
    name: "Grapes",
    category: "Vegetables",
    price: "$4.99 / kg",
    image: "/images/fruite-item-1.jpg",
  },
  {
    name: "Raspberries",
    category: "Vegetables",
    price: "$4.99 / kg",
    image: "/images/fruite-item-2.jpg",
  },
  {
    name: "Oranges",
    category: "Fruits",
    price: "$4.99 / kg",
    image: "/images/fruite-item-3.jpg",
  },
  {
    name: "Banana",
    category: "Meat",
    price: "$4.99 / kg",
    image: "/images/fruite-item-4.jpg",
  },
  {
    name: "Apricots",
    category: "Bread",
    price: "$4.99 / kg",
    image: "/images/fruite-item-5.jpg",
  },
  {
    name: "Apple",
    category: "Fruits",
    price: "$4.99 / kg",
    image: "/images/fruite-item-6.jpg",
  }
];

const categories = ["All Products", "All in One Box", "Mix Sprouts Box", "Chana Jor Box", "Fruit Box", "Fast Food"];

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const {addToCart} = useCart();

  const filteredProducts = activeTab === "All Products"
    ? productsData
    : productsData.filter((product) => product.category === activeTab);

  return (
    <div className="fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-4" style={{fontWeight:500}}>Our Healthy & Snacks Products</h1>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`nav-item rounded-pill px-4  py-2 ${
                      activeTab === category ? 'active' : 'inactive'
                    }`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {activeTab !== "All Products" && (
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-start">{activeTab}</h2>
                <hr />
              </div>
            </div>
          )}
          
          <div className="row g-4">
            {filteredProducts.map((product, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                <div className="rounded position-relative fruite-item">
                  <div className="fruite-img">
                    <img
                      src={product.image}
                      className="img-fluid w-100 rounded-top"
                      alt={product.name}
                    />
                  </div>
                  <div
                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: 10, left: 10 }}
                  >
                    {product.category}
                  </div>
                  <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4 style={{fontWeight:"500"}}>{product.name}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                      eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                      <NavLink
                        to="#"
                        onClick={(e) => {
            e.preventDefault();
            addToCart({ // Pass product data to context
              name: product.name,
              image: product.image,
              price: product.price,
            });
          }}
                        
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsTab;