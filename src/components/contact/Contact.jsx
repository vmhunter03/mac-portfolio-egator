import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g53j9ci",
      "template_ceeb14l",
      form.current,
      "xr8dYndkQp6qD-QzX"
    );
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vmhunterjob@gmail.com</h5>
            <a href="mailto:vmhunterjob@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+639567817792</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+6395617792"
              target="_blank"
            >
              Contact Me!
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@HalidMC</h5>
            <a href="https://twitter.com/ronnoche" target="_blank">
              Say hi!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Say hi!"></textarea>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
