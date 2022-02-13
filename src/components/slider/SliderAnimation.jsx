import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "T. 0499 388 227",
  email: " B.Lantsoght@gmail.com"
};

const sliderContent = {
  name: "Benedikt Lantsoght",
  designation: "Full-stack Developer",
  description: `I am a web development instructor @ Intec Brussel. After their studies, most of my students are experiencing the job I would love to do as a web developer.
  Very happy for them but now it's my turn...`,
  btnText: " DownLoad CV"
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:T. 0499 388 227">{conctInfo.phone}</a>
            <a href="mailto:B.Lantsoght@gmail.com">{conctInfo.email}</a>
          </div>
          <div className="hb-lang">
            {/* <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul> */}
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  React web development by
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">React-Lover</p>
                    <p className="loop-text lead"> UI/UX Designer</p>
                    <p className="loop-text lead"> App Developer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/cv.ben.3L.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner1.png"
            })`
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
