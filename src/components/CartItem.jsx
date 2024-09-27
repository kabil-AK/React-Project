import React from "react";

const CartItem = ({ item, removeFromCart, changeQuantity }) => {
  return (
    <div className="flex justify-between items-center border  p-3  mb-2">
      <div className="font-semibold flex justify-between items-center gap-10">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover"
        />
        <h3 className="text-gray-600">{item.title}</h3>
        <p className="text-red-500">${item.price}</p>
        <p className="text-yellow-500">Quantity: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <button
            onClick={() => changeQuantity(item.id, -1)}
            className="px-3 py-1 bg-red-200 text-red-500 font-bold rounded-lg "
          >
            -
          </button>
          <span className="px-5 font-semibold">{item.quantity}</span>
          <button
            onClick={() => changeQuantity(item.id, 1)}
            className="px-3 py-1 bg-green-200 text-green-500 font-bold rounded-lg"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
