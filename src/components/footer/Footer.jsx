import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <div className="footer__socials">
          <a href="https://twitter.com/HalidMC">Twitter</a>
          <a href="https://github.com/vmhunter03">Github</a>
          <a href="https://www.linkedin.com/in/halid-macalangcom-6b306211b/">
            Linkedin
          </a>
        </div>
        <small>
          Copyright &copy; 2022 <strong>Halid Macalangcom</strong> | All Rights
          Reserved. <br />
          Coded & Design by
          <a href="https://www.buymeacoffee.com/egator/" target="_blank">
            {" "}
            EGATOR
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
