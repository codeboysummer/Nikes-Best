import React from 'react'
import useFilterProducts from '../../../Customhooks/useFilterProducts'
import Products from '../Products'

const Soccer = ({productData,handleAddtoCart}) => {
    const filteredProductdata=useFilterProducts(productData,'soccer');
  return (

    
    <div>
      <div>The best Soccer cleats on the Market</div>
        <Products productData={filteredProductdata}handleAddtoCart={handleAddtoCart}/>
    </div>
  )
}

export default Soccer