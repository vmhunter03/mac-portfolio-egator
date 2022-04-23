import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="" target="__blank"><BsLinkedin /></a>
        <a href="" target="__blank"><FaGithub /></a>
        <a href="" target="__blank"> <FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials