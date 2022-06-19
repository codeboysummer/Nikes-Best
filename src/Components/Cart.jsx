import React from "react";
const Cart = ({ cart,handleIncrment,handleDeleteitem }) => {
 

  return (
    <div className="cartpage">
      {cart.length === 0 ? (
        <h1>you cart is empty!</h1>
      ) : (
        <>
          {" "}
          <div className="cart">
            <div className="itemsnum">
              <h1>your Cart </h1>
              <h3>you have :{cart.length} item(s) </h3>
            </div>
            {cart.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="cartlist"
                  style={{ backgroundColor: item.color }}
                >
                  <li  onClick={()=>{handleDeleteitem(item)}} className="cartitem"><button id="delbtn">x</button></li>

                  <li className="cartitem">
                    <img className="cartimgs" src={item.img} alt="" />
                  </li>
                  <li className="cartitem">{item.title}</li>
                  <li className="cartitem">Size: {item.size}</li>
                  <li className="cartitem">price: ${item.price}</li>

                  <div className="quantitybox">
                    <button className="quantitybtn">-</button>
                    <h4 className="itemquantity">{item.quantity}</h4>
                    <button
                      onClick={() => {
                        handleIncrment(item);
                      }}
                      className="quantitybtn"
                    >
                      +
                    </button>
                  </div>
                </ul>
              );
            })}
          </div>
          <div className="checkout">
            <button
              onClick={() => {
                alert("thank you fofr shopping with us");
              }}
              className="checkoutbtn"
            >
              Checkout
            </button>{" "}
            <h3>
              {" "}
              your Total is: $
              {cart.reduce((currentprice, nextprice) => {
                return currentprice + parseInt(nextprice.price);
              }, 0)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
