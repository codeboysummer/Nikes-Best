import ShoeProductCard from "./ShoeProductCard";
const Products = ({productData,handleAddtoCart}) => {
 
  
  return (
    <div>
      <div className="parent">
        {" "}
        <ShoeProductCard productData={productData} handleAddtoCart={handleAddtoCart} />
      </div>
    </div>
  );
};

export default Products;
