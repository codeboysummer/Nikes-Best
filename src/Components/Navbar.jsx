import React from 'react'
const Navbar = ({setProductdata}) => {
  const navItems=[{item:"NIKE'S BEST"},{item:"SOCCER",},{item:"SNEAKERS"},{item:"CLOTHING"}]
  return (
    <div className='navbarContainer'>
      <ul className="navbar">
        {navItems.map((items)=><li key={items.item}><a className='navlinks' href="#">{items.item}</a></li>)}


      </ul>


    </div>
  )
}

export default Navbar