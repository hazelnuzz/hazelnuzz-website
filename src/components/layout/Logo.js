import React from 'react'

import logo from "../../assets/profil.png"

const Logo = ({position}) => {
  
  return (
    <div className={`brand ${position ? 'aside' : ''}`}>
      <img src={logo} alt="" className="logo"/>
      <span className="name">Hazelnuzz</span>
    </div >
  )
}

export default Logo
