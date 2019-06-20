import React from 'react'
import '../styles/nav.scss'
import facebook from '../assets/socials/facebook.svg';
import instagram from '../assets/socials/instagram.svg';
import soundcloud from '../assets/socials/soundcloud.svg';
import youtube from '../assets/socials/youtube.svg';

const Nav = () => {
  return (
    <nav className="nav">
    <div className="left">
      <img src="" alt="" className="logo"/>
      <span className="brand">hazelnuzz</span>
    </div>
    <div className="right">
      <div className="menu">
        <div className="menu-item active">
          <span className="menu-item--title">Services</span>
        </div>
        <div className="menu-item">
          <span className="menu-item--title">Portfolio</span>
        </div>
        <div className="menu-item">
          <span className="menu-item--title">Contact</span>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/hazelnuzz.de" target="_blank" rel="noopener noreferrer" className="social">
          <img src={facebook} alt="" className="social--icon"/>
        </a>
        <a href="https://www.instagram.com/hazelnuzz_/" target="_blank" rel="noopener noreferrer" className="social">
          <img src={instagram} alt="" className="social--icon"/>
        </a>
        <a href="https://soundcloud.com/hazelnuzz-official" target="_blank" rel="noopener noreferrer" className="social">
          <img src={soundcloud} alt="" className="social--icon"/>
        </a>
        <a href="https://www.youtube.com/channel/UC_dmK20XGPHYqMdlMm8zqXw/" target="_blank" rel="noopener noreferrer" className="social">
          <img src={youtube} alt="" className="social--icon"/>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Nav
