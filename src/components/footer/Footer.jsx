import React from 'react'
import './footer.css'
import {FaCode} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'><FaCode/></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://fb.com"><FiFacebook/></a>
        <a href="http://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rajeev Hansda</small>
      </div>


    </footer>
  )
}

export default Footer