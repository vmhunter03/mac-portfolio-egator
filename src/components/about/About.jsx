import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { GiTeacher } from "react-icons/gi";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const home = () => {
  return (
    <section id="home">
      <div className="header__container">
        <h5>Hello I am</h5>
        <h1>Halid Macalangcom</h1>
        <h5 className="text-light">Web App Developer</h5>
      </div>

      <HeaderSocials />

      <div className="container home__container">
        <div className="home__me">
          <div className="home__me-img">
            <img src={ME} alt="home Picture" />
          </div>
        </div>

        <div className="home__content">
          {/* <div className="home__cards">
            <article className="home__card">
              <GiTeacher className="home__icon" />
              <h5>Educator</h5>
              <small>6+ years</small>
            </article>
            <article className="home__card">
              <GiPublicSpeaker className="home__icon" />
              <h5>Speaker</h5>
              <small>&lt;100 times</small>
            </article>
            <article className="home__card">
              <FaCode className="home__icon" />
              <h5>Developer</h5>
              <small>&lt;10 personal projects</small>
            </article>
          </div> */}
          {/* closing div of home__cards  */}
          <p>
            I'm a junior developer who has recently started my journey as a web
            developer. I'm a self-motivated learner with strong organisation,
            time management & communication skills. I'm able to work
            independently & collaboratively in a team with a meticulous
            attention to detail.
          </p>
          <CTA />
          {/* <a href="#contact" class="btn btn-primary">
            Say hi!
          </a> */}
        </div>
        {/* closing div of home__content */}
      </div>
      {/* closing div of container */}
    </section>
  );
};

export default home;
