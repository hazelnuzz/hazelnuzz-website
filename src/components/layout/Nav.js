import React from 'react'
import '../../styles/nav.scss'
import Menu from './Menu';
import Logo from './Logo';
import Socials from './Socials';




const Nav = ({open, setOpen}) => {
  console.log(open);
  return (
    <nav className={`nav ${open ? 'open' : ""}`}>
      <Logo />
      <Logo position={'aside'} />
      <Menu />
      <Socials />
      <Socials position={'aside'} />
    </nav>
  )
}

export default Nav
