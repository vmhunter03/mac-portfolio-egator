import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h5>Batman</h5> */}
      <h2>The Skills I Have</h2>

      <div className="container experience__container">
        {/* frontend start */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
              <FaCss3 className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                {/* {/* <small className="text-light">Experienced</small> */} 
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                {/* {/* <small className="text-light">Intermeediate</small> */} 
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                {/* {/* <small className="text-light">Experienced</small> */} 
              </div>
            </article>

            <article className="experience__details">
              <BsBootstrap className="experience__details-icon"/>
              <div>
                <h4>Boostrap</h4>
                {/* {/* <small className="text-light">Experienced</small> */} 
              </div>
            </article>
            
          </div>
        </div>
        {/* end of frontend content */}

        {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Ruby on Rails</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div> */}
        {/* end of backend content */}
      </div>
    </section>
  );
};

export default Experience;
