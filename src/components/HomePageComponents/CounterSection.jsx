import React from "react";

const stats = [
  {
    icon: "fa-users",
    title: "satisfied customers",
    value: "1963",
  },
  {
    icon: "fa-users",
    title: "quality of service",
    value: "99%",
  },
  {
    icon: "fa-users",
    title: "quality certificates",
    value: "33",
  },
  {
    icon: "fa-users",
    title: "Available Products",
    value: "789",
  },
];

const CounterSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="bg-light p-5 rounded">
          <div className="row g-4 justify-content-center">
            {stats.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5 text-center">
                  <i className={`fa ${item.icon} text-secondary`}></i>
                  <h4 className="mt-3 text-capitalize">{item.title}</h4>
                  <h1>{item.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
