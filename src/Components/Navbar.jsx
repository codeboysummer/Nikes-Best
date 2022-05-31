import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({cart}) => {
  const navItems=[{item:"NIKE'S BEST",link:'/'},{item:"SOCCER",link:'/Soccer'},{item:"SNEAKERS",link:'/Sneakers'},{item:"CLOTHING",link:'/Clothing'},{item:<i className="fa-solid fa-cart-shopping"></i>,link:'/Cart'}]
  return (
    <div className='navbarContainer'>
      <ul className="navbar">
        {navItems.map((items)=><li key={items.item}><Link className='navlinks' to={items.link}>{items.item}</Link></li>)}


      </ul>



    </div>
  )
}

export default Navbar