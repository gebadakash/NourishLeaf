import React from "react";

const FruitShop = () => {
  // Categories data
  const categories = [
    { name: "Apples", count: 3 },
    { name: "Oranges", count: 5 },
    { name: "Strawbery", count: 2 },
    { name: "Banana", count: 8 },
    { name: "Pumpkin", count: 5 },
  ];

  // Featured products data
  const featuredProducts = [
    { name: "Big Banana", price: 2.99, oldPrice: 4.11, image: "featur-1.jpg" },
    { name: "Big Banana", price: 2.99, oldPrice: 4.11, image: "featur-2.jpg" },
    { name: "Big Banana", price: 2.99, oldPrice: 4.11, image: "featur-3.jpg" },
  ];

  // Fruits items data
  const fruitItems = [
    { name: "Grapes", price: 4.99, image: "fruite-item-5.jpg" },
    { name: "Grapes", price: 4.99, image: "fruite-item-5.jpg" },
    { name: "Raspberries", price: 4.99, image: "fruite-item-2.jpg" },
    { name: "Apricots", price: 4.99, image: "fruite-item-4.jpg" },
    { name: "Banana", price: 4.99, image: "fruite-item-3.jpg" },
    { name: "Oranges", price: 4.99, image: "fruite-item-1.jpg" },
    { name: "Raspberries", price: 4.99, image: "fruite-item-2.jpg" },
    { name: "Grapes", price: 4.99, image: "fruite-item-5.jpg" },
    { name: "Oranges", price: 4.99, image: "fruite-item-1.jpg" },
  ];

  // Pagination data
  const paginationItems = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4 mt-2">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Categories</h4>
                      <ul className="list-unstyled fruite-categorie">
                        {categories.map((category, index) => (
                          <li key={index}>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>
                                {category.name}
                              </a>
                              <span>({category.count})</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h4 className="mb-3">Featured products</h4>
                    {featuredProducts.map((product, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center justify-content-start mb-3"
                      >
                        <div
                          className="rounded me-4"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <img
                            src={`/images/${product.image}`}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">{product.name}</h6>
                          <div className="d-flex mb-2">
                            {[...Array(4)].map((_, i) => (
                              <i
                                key={i}
                                className="fa fa-star text-secondary"
                              ></i>
                            ))}
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">${product.price}</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              ${product.oldPrice}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex justify-content-center my-4">
                      <a
                        href="#"
                        className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative">
                      <img
                        src="/images/banner-fruits.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                      <div
                        className="position-absolute"
                        style={{
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <h3 className="text-secondary fw-bold">
                          Fresh <br /> Fruits <br /> Banner
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                  {fruitItems.map((fruit, index) => (
                    <div key={index} className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src={`/images/${fruit.image}`}
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>{fruit.name}</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              ${fruit.price} / kg
                            </p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="pagination d-flex justify-content-center mt-5">
                      <a href="#" className="rounded">
                        «
                      </a>
                      {paginationItems.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className={`rounded ${item === 1 ? "active" : ""}`}
                        >
                          {item}
                        </a>
                      ))}
                      <a href="#" className="rounded">
                        »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitShop;