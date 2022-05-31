import React from 'react'
import Products from '../Products';
import useFilterProducts from '../../../Customhooks/useFilterProducts';

const Clothing = ({productData,handleAddtoCart}) => {
    const filteredProductdata= useFilterProducts(productData,'clothing');

    return (
      <div>
          <div ><h1 style={{color:'white'}}><u>Hottest Clothing Out</u></h1></div>
          <Products productData={filteredProductdata}handleAddtoCart={handleAddtoCart}/>
  
  
  
      </div>
    )
}

export default Clothing