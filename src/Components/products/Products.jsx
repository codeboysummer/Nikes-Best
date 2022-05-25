import ShoeProductCard from "./ShoeProductCard";

const Products = ({productData}) => {
 
 
  
  return (
    <div>
      <div className="parent">
        {" "}
        <ShoeProductCard productData={productData} />
      </div>
    </div>
  );
};

export default Products;
