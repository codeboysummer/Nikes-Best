import React from 'react'
import Products from '../Products'

const Homepage = ({productData,handleAddtoCart}) => {
  return (
    <div>
    <Products productData={productData}handleAddtoCart={handleAddtoCart}/>


    </div>
  )
}

export default Homepage