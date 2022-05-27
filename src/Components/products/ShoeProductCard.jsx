import React from "react";
import { useState } from "react";

const ShoeProductCard = ({ productData }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = [7, 8, 9, 10];
console.log(selectedSize);
  return productData.map((product) => {
    return (
      <div key={product.id} className="productsGrid">
        <div key={product.id} className="container">
          <div
            key={product.id}
            style={{ backgroundColor: product.color }}
            className="card"
          >
            <div key={product.id} className="imgBx">
              <img key={product.id} src={product.img} alt="shoes" />
            </div>
            <div className="contentBx">
              <h2>{product.title}</h2>
              <div className="size">
                <h3>Size :</h3>
                {sizes.map((size) => (
                  <button
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                    className="sizebutton"
                    style={{
                      margin: ".5rem",
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "1rem",
                      border: "none",
                      backgroundColor:
                        selectedSize === size ? "black" : "white",

                      color: selectedSize === size ? "white" : "black",
                    }}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <a href="#" alt="logo">
                {" "}
                <i className="fa-solid fa-cart-arrow-down"></i>
              </a>
              <br />
              <span className="price">Price: {product.price}</span>
              <br />
              <i
                style={{ color: "white", cursor: "pointer" }}
                className="fa-solid fa-circle-info"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ShoeProductCard;
