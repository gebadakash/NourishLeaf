import React from "react";

const ServiceSection = () => {
  const services = [
    {
      image: "/images/featur-1.jpg",
      bgClass: "bg-secondary",
      borderClass: "border-secondary",
      titleColor: "text-white",
      contentBg: "bg-primary",
      title: "Fresh Apples",
      subtitle: "20% OFF",
    },
    {
      image: "/images/featur-2.jpg",
      bgClass: "bg-dark",
      borderClass: "border-dark",
      titleColor: "text-primary",
      contentBg: "bg-light",
      title: "Tasty Fruits",
      subtitle: "Free delivery",
    },
    {
      image: "/images/featur-3.jpg",
      bgClass: "bg-primary",
      borderClass: "border-primary",
      titleColor: "text-white",
      contentBg: "bg-secondary",
      title: "Exotic Vegitable",
      subtitle: "Discount 30$",
    },
  ];

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <a href="#">
                <div className={`service-item ${service.bgClass} rounded border ${service.borderClass}`}>
                  <img src={service.image} className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className={`service-content ${service.contentBg} text-center p-4 rounded`}>
                      <h5 className={service.titleColor}>{service.title}</h5>
                      <h3 className="mb-0">{service.subtitle}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
