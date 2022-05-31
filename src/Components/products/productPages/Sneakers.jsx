import React from 'react'
import useFilterProducts from '../../../Customhooks/useFilterProducts'
import Products from '../Products';

const Sneakers = ({productData,handleAddtoCart}) => {
    const filteredProductdata= useFilterProducts(productData,'sneakers');

  return (
    <div>
        <div ><h1 style={{color:'white'}}><u>Hottest sneakers Out</u></h1></div>
        <Products productData={filteredProductdata}handleAddtoCart={handleAddtoCart}/>



    </div>
  )
}

export default Sneakers