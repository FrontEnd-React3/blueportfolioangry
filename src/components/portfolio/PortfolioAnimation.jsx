import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 1,
  500: 1
};

const AllPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "Styled Components",
    subTitle: "Pizza Order App",
    alterText: "Illustration",
    delayAnimation: "100",
    portfolioLink: "https://dazzling-bohr-6662c8.netlify.app/"
  },
  {
    img: "m-portfolio-1",
    title: "React, API",
    subTitle: "Recipe Application",
    alterText: "React - Api",
    delayAnimation: "",
    portfolioLink: "https://confident-elion-e6174a.netlify.app"
  },

  {
    img: "m-portfolio-3",
    title: "React Native",
    subTitle: "Income Tracker",
    alterText: "Business Mockup",
    delayAnimation: "200",
    portfolioLink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/"
  },

  {
    img: "m-portfolio-5",
    title: "MongoDB",
    subTitle: "Studying",
    alterText: "",
    delayAnimation: "100",
    portfolioLink: "https://www.linkedin.com/in/benedikt-lantsoght-02481319/"
  },
  {
    img: "m-portfolio-4",
    title: "Context",
    subTitle: "Excercise + Attaching Client Service App",
    alterText: "E-Cosmetics",
    delayAnimation: "0",
    portfolioLink:
      "https://blissful-ride-78dcc3.netlify.app/"
  },
  {
    img: "m-portfolio-6",
    title: "React, API, Typescript",
    subTitle: "Quiz App",
    alterText: "Teaching React",
    delayAnimation: "200",
    portfolioLink: "https://objective-darwin-a73e46.netlify.app"
  },
  {
    img: "m-portfolio-9",
    title: "Teaching React",
    subTitle: "Coaching & problem solving",
    alterText: "Teaching React",
    delayAnimation: "200",
    portfolioLink: "hhttps://intecbrussel.be"
  }
];

const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
