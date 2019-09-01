import React from 'react'

const Menu = () => {
  const data = ["Services","Portfolio","Contact"]
  // Create menue item sections.length times
  const menuItems = data.map(item => (
    <div className="menu-item">
      <span className="menu-item--title">{item}</span>
    </div>
  ))
  return (
    <div className="menu">
      {menuItems}
    </div>
  )

}

export default Menu
