import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsInfoSquare} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'
function Nav() {
  return (
    <nav>
      <a href="#"> <AiOutlineHome /></a>
      <a href="#about"> <BsInfoSquare /></a>
      <a href="#experience"> <BsBookmarkCheck /></a>
      <a href="#services"> <FaRegHandshake /></a>
      <a href="#contact"> <MdMailOutline /></a>
    </nav>
  )
}

export default Nav