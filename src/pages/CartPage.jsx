import React from "react";
import CartItem from "../components/CartItem";

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="p-4 bg-pink-50 w-full h-screen">
      <h2 className="text-xl font-bold text-2xl">Your Cart </h2> <br />
      <p className=" mb-4 text-cyan-600 font-semibold">
        You have <span className="text-red-500 font-bold   ">{cart.length} </span> unique item
        {cart.length !== 1 ? "s" : ""} in your cart.
      </p>
      {cart.length === 0 ? (
        <p className="text-red-700 font-semibold text-2xl">Your cart is empty :(</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          ))}
          <div className="mt-4 text-lg font-bold text-green-700 text-right p-4 ">
            <br />
            Total : ${total.toFixed(2)} <br />
            Discounted Total : ${discountedTotal.toFixed(2)} (10% off)
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
