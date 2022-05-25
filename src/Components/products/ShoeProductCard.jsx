import React from "react";

const ShoeProductCard = ({productData}) => {

  return (
    productData.map((product)=>{
  return(

  <div key={product.id} className="productsGrid">
      <div key={product.id}  className="container">
        <div key={product.id} style={{backgroundColor:product.color}} className= "card">
          <div key={product.id} className="imgBx">
            <img key={product.id}
              src={product.img}
              alt="shoes"
            />
          </div>
          <div  className="contentBx">
            <h2>{product.title}</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#" alt="logo">
              {" "}
              <i className="fa-solid fa-cart-arrow-down"></i>
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
