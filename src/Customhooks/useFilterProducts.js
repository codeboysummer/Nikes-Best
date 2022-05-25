import React from "react";

const useFilterProducts = (arrayofproducts, section) => {
  const filteredProducts = arrayofproducts.filter(product=> product.catagory===section);

  return filteredProducts;
};



export default useFilterProducts;
