import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Memory Game",
    details:
      "I built this project as a part of the React Basics module from course Build Web Apps with React & Firebase by The Net Ninja (Shaun Pelling).",
    github: "https://github.com/vmhunter03/onepiececard",
    demo: "https://opcardmatching.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Personal Website v1.0",
    details:
      "",
    github: "https://github.com/vmhunter03/mac-portfolio-egator",
    demo: "https://halidmacalangcom.vercel.app",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Learning Journey</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, github, demo }) => (
          <article ke={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <a href={demo} target="_blank" rel="noreferrer">
                <img src={image} alt={title} />
              </a>
            </div>
            <div>
              <h3>{title}</h3>
              <small className="details">
                <i>{details}</i>
              </small>
            </div>

            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                Github Repository
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
