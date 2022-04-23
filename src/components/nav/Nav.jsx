import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <BsInfoSquare />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <BsBookmarkCheck />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        {" "}
        <FaRegHandshake />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <MdMailOutline />
      </a>
    </nav>
  );
}

export default Nav;
