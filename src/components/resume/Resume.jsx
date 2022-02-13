import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Web Dev Instructor`,
    jobType: `CDI`,
    jobDuration: `July 2019 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Intec Brussel",
    jobDescription: `The profession of graphic designer is losing its praise.
    It has to be properly designed, but it should not cost anything ... Due to the shrinking
    market, I often had to relieve my graphic job with all kinds of irrelevant Interim jobs.
    In addition, I had to design more and more corporate identities for web pages and the
    result was sometimes disappointing.
    From this “frustration” I decided to become a web developer myself. After a year at Syntra for my thesis at Syntra for UZB I got 98%, speaking of motivation!`
  },
  {
    jobPosition: `Graphic Designer & DTP`,
    jobType: `FreeLance`,
    jobDuration: `Oct. 2012 - July 2017`,
    timeDuraton: `Full Time`,
    compnayName: "Eurologos - Yelomex - Panos",
    jobDescription: `Graphic Designers today have to be versatile. Writing content in multiple languages is
    also part of this. Eurologos Translations used me as a versatile graphic linguistic clerk.
    Yellow often needed me to for their vinyl on shop windows.
    Solutions Id and Panos mainly for making advertising signs.`
  },
  {
    jobPosition: `General Coördinator`,
    jobType: `Print-on-demand`,
    jobDuration: `Oct. 1998 - Sept 2012`,
    timeDuraton: `Owner`,
    compnayName: "ArteGrafia Print & Design",
    jobDescription: `On the eve of the economic boom, I opened a print-on-demand company and more ... It
    was a hit, soon I had 4 employees, I spoke everyone’s language, deadlines were respected,
    I had no competitors. Even Volvo was one of my customers for the golf tournament they
    organized annually.`
  }
];

const educatonContent = [
  {
    passingYear: "1985-1989",
    degreeTitle: "Ph. in Horriblensess",
    instituteName: "University Of Evil Doing"
  },
  {
    passingYear: "2013-2016",
    degreeTitle: "Bsc. in Computer Science",
    instituteName: "World University"
  },
  {
    passingYear: "2010-2012",
    degreeTitle: "Graphic Artist Training ",
    instituteName: "Graphic Master Institute"
  }
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
