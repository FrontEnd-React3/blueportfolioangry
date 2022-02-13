import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `With over 30 years experience as a graphic designer, I see more creative possibilities in web pages. This experience is a huge advantage and results in better sites.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `My favorite pastime, nice code is like poetry, saying the essence with just a few functions.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "My Goal",
    descriptions: `Trying to improve the way we work and live by designing apps that make life easier.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
