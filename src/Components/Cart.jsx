import React from "react";
const Cart = ({ cart }) => {
  return (
    <div className="cartpage">
      {cart.length === 0 ? (
        <h1>you cart is empty!</h1>
      ) : (
        <>
          {" "}
          <div className="cart">
            <h1>your Cart </h1>
            <h3>you have :{cart.length} item(s) </h3>
            {

            
            
            
            cart.map((item) => {
              return (
                <>
                  <ul className="cartlist" style={{backgroundColor:item.color}}>
                    <li className="cartitem">x</li>

                    <li className="cartitem">
                      <img className="cartimgs" src={item.img} alt="" srcset="" />
                    </li>
                    <li className="cartitem">{item.title}</li>
                    <li className="cartitem">Size: {item.size}</li>
                    <li className="cartitem">price: ${item.price}</li>

                    <button className="quantitybtn">-</button>
                    <span>{item.quantity}</span>
                    <button className="quantitybtn">+</button>
                  </ul>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
