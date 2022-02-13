import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";
import Face from "./beneface.jpg";
import NL from "./nl.svg";
import FR from "./fr.svg";
import EN from "./gb.svg";
import ES from "./be.svg";
import DE from "./es.svg";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={Face} alt="face" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Ux/Ui Designer</p>
                  <h3>Benedikt Lantsoght</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I have been a graphic designer since 1989, went back to
                    school and learned how to code. Since July 2019 I am a REACT
                    instructor at Intec Brussels.
                  </p>
                  <p>
                    Teaching complex code as simple as possible made me an
                    appreciated job-generator for my students. Multilingual like
                    no other and always open to learn new things (if there is a
                    demand for it).{" "}
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li id="flagcontainer">
                          <img className="flags" src={NL} alt="flag" />
                          <img className="flags" src={FR} alt="flag" />
                          <img className="flags" src={EN} alt="flag" />
                          <img className="flags" src={ES} alt="flag" />
                          <img className="flags" src={DE} alt="flag" />
                        </li>
                        <li>
                          <label>Vehicle: </label>
                          <span>Car & Motorbike</span>
                        </li>
                        <li></li>
                        <li>
                          <label>Soldatenstraat 63, </label>
                          <span>1082 Brussels</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li className="morelead">
                          <label>Phone: </label>
                          <span>(+32) 499 388 227</span>
                        </li>
                        <li className="morelead">
                          <label>Email: </label>
                          <span>B.Lantsoght@LetMeSee.be</span>
                        </li>
                        <li></li>
                        <li className="morelead">
                          <label>CDI: </label>
                          <span>Intec Brussel - React Web Developer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
