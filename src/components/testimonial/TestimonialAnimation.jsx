import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [

    {
      imageName: "team-2",
      desc: ` Thanks to his non stop support, anytime I needed it, 7/7, I became a web developer in 4 months, a lot faster than I in my wildest imagination.`,
      reviewerName: "Tiago Ferreira",
      designation: "Web Developer at Jamy for Belfius",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: ` Benedikt, someone you can count on with a passion an a no nonsense approach. I can only say thank you.`,
      reviewerName: "Ufuk Uysal",
      designation: "Software Developer",
      delayAnimation: "400",
    },    {
      imageName: "team-1",
      desc: `  Benedikt, a quick understander respecting deadlines. Our man in advertising since 1996, why change?.`,
      reviewerName: "Nigel Eede",
      designation: "CEO at Marbella Choice Properties",
      delayAnimation: "",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
