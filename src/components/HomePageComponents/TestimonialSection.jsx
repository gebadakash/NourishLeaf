import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 4,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/images/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const carouselOptions = {
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>
        <OwlCarousel
          className="owl-theme testimonial-carousel"
          {...carouselOptions}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-item img-border-radius bg-light rounded p-4"
              key={index}
            >
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">{testimonial.text}</p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src={testimonial.image}
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">{testimonial.name}</h4>
                    <p className="m-0 pb-3">{testimonial.profession}</p>
                    <div className="d-flex pe-5">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < testimonial.rating ? "text-primary" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
