import React from "react";

const ShoeProductCard = ({Productdata}) => {
  return (
Productdata.map((product)=>{
  return(

  <div className="productsGrid">
      <div  class="container">
        <div style={{backgroundColor:product.color}} class= "card">
          <div class="imgBx">
            <img
              src={product.img}
              alt="shoes"
            />
          </div>
          <div class="contentBx">
            <h2>{product.title}</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div class="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#" alt="logo">
              {" "}
              <i class="fa-solid fa-cart-arrow-down"></i>
            </a>
            <br />
            <span className="price">Price: {product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
})
    
  );

};

export default ShoeProductCard;
