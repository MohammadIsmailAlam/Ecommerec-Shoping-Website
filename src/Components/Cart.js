import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate("/product");
      };
  // increace qty
  const incressQuntity = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      })
    );
  };

  // Dec Qty
  const decressQuantity = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty - 1 }
          : curElm;
      })
    );
  };
  //Remove cart product
  const removeProduct = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };
  // Total price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <div>
      <div className="cartContainer p-10 bg-gray-200 border-b-2">
        {cart.length === 0 ? (
          <div className="emptyCart grid justify-center">
            <h2 className="empty text-2xl text-uppercase font-semibold text-gray-800 mb-5">
              Cart is Empty
            </h2>
            <button className="emptyCartbtn text-white py-2 px-4 bg-blue-900" onClick={navigateToProduct}>
              Shop Now
            </button>
          </div>
        ) : (
          <div className="contant max-w-full p-5">
            {cart.map((curElm) => (
              <div
                className="cart_item p-5 flex bg-white rounded my-2"
                key={curElm.id}
              >
                <div className="img_box p-5 bg-gray-200">
                  <img
                    src={curElm.Img}
                    alt={curElm.Title}
                    className="w-64 h-64"
                  />
                </div>
                <div className="detail ml-10 flex mt-5 p-5">
                  <div className="info">
                    <h4 className="text-uppercase text-xs text-gray-600 font-thin tracking-wide">
                      {curElm.Cat}
                    </h4>
                    <h3 className="text-lg text-blue-900 font-light tracking-wide mt-2">
                      {curElm.Title}
                    </h3>
                    <p className="text-blue-900 mt-2">Price: ${curElm.Price}</p>
                    <div className="qty flex items-center mt-2">
                      <button
                        className="incressQty px-3 py-1 bg-transparent outline-none text-blue-500 text-2xl cursor-pointer"
                        onClick={() => incressQuntity(curElm)}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={curElm.qty}
                        className="w-10 text-center border-gray-400 border"
                        readOnly
                      />
                      <button
                        className="decressQty px-3 py-1 bg-transparent outline-none text-blue-500 text-2xl cursor-pointer"
                        onClick={() => decressQuantity(curElm)}
                      >
                        -
                      </button>
                    </div>
                    <h4 className="subTotal text-blue-900 text-lg mt-2">
                      sub total: ${curElm.Price * curElm.qty}
                    </h4>
                  </div>
                  <div className="close ml-5 mt-2">
                    <button onClick={() => removeProduct(curElm)}>
                      <AiOutlineClose className="text-red-600 text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="md:grid justify-center">
            <h2 className="totalPrice ml-50 text-2xl text-uppercase font-light tracking-wide mt-5">
              Total: ${totalPrice}
            </h2>
            <button className="checkout ml-53 mt-4 py-2 px-4 text-white bg-blue-500 cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
