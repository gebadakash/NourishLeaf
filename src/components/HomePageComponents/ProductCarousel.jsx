import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const vegetables = [
  {
    name: "Potatoes",
    price: "$7.99 / kg",
    image: "/images/vegetable-item-1.jpg",
  },
  {
    name: "Parsely",
    price: "$4.99 / kg",
    image: "/images/vegetable-item-6.jpg",
  },
  {
    name: "Parsely",
    price: "$4.99 / kg",
    image: "/images/vegetable-item-3.png",
  },
  {
    name: "Banana",
    price: "$7.99 / kg",
    image: "/images/vegetable-item-5.jpg",
  },
  {
    name: "Bell Papper",
    price: "$7.99 / kg",
    image: "/images/vegetable-item-5.jpg",
  },
];

const ProductCarousel = () => {
  const carouselOptions = {
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },

    navText: [
      '<span aria-label="Previous">‹</span>',
      '<span aria-label="Next">›</span>',
    ],
  };

  return (
    <div className="container-fluid vesitable py-2">
      <div className="container py-2">
        <h1 className="mb-0" style={{fontWeight:"300"}}>Fresh Organic Vegetables</h1>

        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {vegetables.map((veg, index) => (
            
              <div className="border border-primary rounded position-relative vesitable-item" key={index}>
                <div className="vesitable-img">
                  <img
                    src={veg.image}
                    className="img-fluid w-100 rounded-top"
                    alt={veg.name}
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: 10, right: 10 }}
                >
                  Vegetable
                </div>
                <div className="p-3 rounded-bottom">
                  <h4>{veg.name}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold mb-0">{veg.price}</p>
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
            
          ))}
        </OwlCarousel>
      </div>
      <style jsx>{`
        .vesitable .owl-nav .owl-prev,
        .vesitable .owl-nav .owl-next {
          position: absolute !important;
          color: var(--bs-primary) !important;
          padding: 5px 25px !important;
          border: 1px solid var(--bs-secondary) !important;
          border-radius: 20px !important;
          transition: 0.5s !important;
          background: transparent !important;
        }
        .vesitable .owl-nav .owl-prev {
          right: 88px !important;
        }
        .vesitable .owl-nav .owl-next {
          right: 0 !important;
        }
        .vesitable .owl-nav .owl-prev:hover,
        .vesitable .owl-nav .owl-next:hover {
          background: var(--bs-secondary) !important;
          color: var(--bs-white) !important;
        }
        .vesitable .owl-nav button span {
          position: absolute;
          top: 4px;
          right: -10px;
          color: var(--bs-primary);
          padding: 5px 25px;
          border: 1px solid var(--bs-secondary);
          border-radius: 20px;
          transition: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
